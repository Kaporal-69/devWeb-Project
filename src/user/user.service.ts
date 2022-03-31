import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDoc } from './schema/user.schema';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDoc>) {};

    // Création d'un user
    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    // Recuperer 1 user avec le mail
    async findOneByMail(name: string) : Promise<UserDoc> {
        return this.userModel.findOne({ name: name });
    }

}
