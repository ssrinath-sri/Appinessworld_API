/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */

import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import {MongooseModule} from '@nestjs/mongoose';
import { CategorySchema } from './../schemas/category.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'categories', schema: CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}