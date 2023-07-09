import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./product.model";
import {FileService} from "../file/file.service";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private productRepository: typeof Product, private fileService: FileService) {
    }

    async create(dto: CreateProductDto, image) {
        const fileName = await this.fileService.createFile(image)
        const product = await this.productRepository.create({...dto, image: fileName})
        return product
    }

    async updateImage(id: number, image) {
        try {
            const fileName = await this.fileService.createFile(image)
            const product = await this.productRepository.findOne({where: {id}})
            product.image = fileName
            return product
        } catch (e) {
            throw new HttpException("Товар не найден", HttpStatus.NOT_FOUND)
        }
    }

    async getAllProducts() {
        const products = await this.productRepository.findAll({include: {all: true}})
        return products
    }

    async getProductById(id: number) {
        const product = await this.productRepository.findOne({where: {id}, include: {all: true}})
        return product
    }
}
