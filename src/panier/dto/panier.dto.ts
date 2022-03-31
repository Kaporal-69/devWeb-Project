import { User } from '../../user/schema/user.schema';
export type CreatePanierDto = {

    user : User,
    idPokemon: number[],
    price : number
}