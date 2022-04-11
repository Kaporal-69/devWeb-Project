import { Controller, Get, Post, Body, Query, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './schema/product.schema';
import { Roles } from '../role/role.decorator';
import { Role } from '../role/role.enum';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {RolesGuard} from '../role/role.guard';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}
    @Get()
    @Roles(Role.User, Role.Admin)
    getAllProduct() : Promise<Product[]> {
        return this.productService.findAll();
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    createMessage(@Body() createProductDto: CreateProductDto) : Promise<CreateProductDto> {
        return this.productService.create(createProductDto);
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.productService.findOne(id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    remove(@Param('id') id: number) {
        return this.productService.delete(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    update(@Param('id') id: number, @Body() createProductDto : CreateProductDto) {
        return this.productService.update(id, createProductDto);
    }

}
