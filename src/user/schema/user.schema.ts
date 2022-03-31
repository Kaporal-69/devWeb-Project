import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Role} from '../../role/role.enum';

export type UserDoc = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    mail: string;

    @Prop()
    phone: string;

    @Prop()
    password: string;

    @Prop({enum: Role, default:Role.User})
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);