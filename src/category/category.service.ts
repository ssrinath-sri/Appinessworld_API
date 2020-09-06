/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */
import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { CategoryModel} from '../schemas/category.schema';
import { CategoryDto } from './../dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('categories') private readonly categoryModel: Model<CategoryModel>){}

    // Create new category using our service along with schema , dto
    async createCategory(categoryDto: CategoryDto){
        const addNewCategory = await this.categoryModel(categoryDto);
        return addNewCategory.save();
    }
    // Get all categorys 
    async fetchAllCategory(): Promise<CategoryModel[]>{
        const getAllCategory = await this.categoryModel.find().exec();
        return getAllCategory;
    }
    // Get CategoryById 
    async fetchCategoryById(categoryById): Promise<CategoryModel[]>{
        const getCategoryById = await this.categoryModel.findById(categoryById).exec();
        return getCategoryById;

    }
}
