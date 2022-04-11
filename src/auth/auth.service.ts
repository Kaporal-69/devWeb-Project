import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt/dist/jwt.service'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private usersService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByMail(username);
        if (user && bcrypt.compare(password, user.password)) {
            const { password, ...result } = user.toObject();
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.name, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
