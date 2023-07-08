import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Product} from "./product.model";
import {FileModule} from "../file/file.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
      SequelizeModule.forFeature([User, Product]),
      AuthModule,
      FileModule,
  ],
})
export class ProductsModule {}
