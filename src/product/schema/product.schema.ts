import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDoc = Product & Document;

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    price: number;
}

export const ProdSchema = SchemaFactory.createForClass(Product);