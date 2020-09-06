/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ProductSchema } from './../schemas/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'products', schema: ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}