import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {User} from '../../user/schema/user.schema';

export type PanierDoc = Panier & Document;

@Schema()
export class Panier {
    
    @Prop()
    user: User;
    
    @Prop()
    idPokemon: number[];
    
    @Prop()
    price : number
    
}

export const PanierSchema = SchemaFactory.createForClass(Panier);