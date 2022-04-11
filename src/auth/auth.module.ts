import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import {RolesGuard} from '../role/role.guard';


@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '3600s' },
  }),],
  providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard],
  controllers: [AuthController]
})
export class AuthModule {}
