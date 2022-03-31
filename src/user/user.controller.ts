import { Controller, Get, Post, Body, Query, Param, Delete, Put } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schema/user.schema';

import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(
        @Body('name') name: string,
        @Body('mail') mail: string,
        @Body('phone') phone: string,
        @Body('password') password: string,
    ) : Promise<CreateUserDto> {
        const hashPassword = await bcrypt.hash(password, 12)
        return this.userService.create({
            name,
            mail,
            phone,
            password: hashPassword
        });
    }

    @Get(':name')
    findOne(@Param('name') name) {
        return this.userService.findOneByMail(name);
    }
}
