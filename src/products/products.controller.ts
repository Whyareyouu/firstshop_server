import {Body, Controller, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {ProductsService} from "./products.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Product} from "./product.model";

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {
    }

    @ApiOperation({summary: 'Create product'})
    @ApiResponse({status: 200, type: Product})
    @Post()
    @Roles('admin')
    @UseGuards(RolesGuard)
    @UseInterceptors(FileInterceptor('image'))
    createProduct(@Body() dto: CreateProductDto, @UploadedFile() image) {
        return this.productService.create(dto, image)
    }

    @ApiOperation({summary: 'Update product image'})
    @ApiResponse({status: 200, type: Product})
    @Roles('admin')
    @UseGuards(RolesGuard)
    @Patch('/:id')
    @UseInterceptors(FileInterceptor('image'))
    updateImage(@Param("id") id: number, @UploadedFile() image) {
        return this.productService.updateImage(id, image)
    }

    @ApiOperation({summary: 'Get all products'})
    @ApiResponse({status: 200, type: [Product]})
    @Get()
    getAllProducts() {
        return this.productService.getAllProducts()
    }

    @ApiOperation({summary: 'Get product by id'})
    @ApiResponse({status: 200, type: Product})
    @Get('/:id')
    getProductById(@Param("id") id: number) {
        return this.productService.getProductById(id)
    }
}
