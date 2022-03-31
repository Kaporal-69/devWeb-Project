import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);