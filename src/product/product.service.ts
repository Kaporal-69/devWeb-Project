import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductDoc, Product } from './schema/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDoc>) {}

    // Création / Ajout d'un produit
    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    // Recuperer tous les produits
    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    // Recuperer 1 produit avec l'id
    async findOne(id: number) : Promise<Product> {
        return this.productModel.findById(id);
    }

    // Mettre à jour un produit
    async update(id: number, produit: CreateProductDto) : Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, produit);
    }

    // Supprimer 1 produit
    async delete(id: number) : Promise<Product[]>{
        return this.productModel.findByIdAndDelete(id);
    }
}
