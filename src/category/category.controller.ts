/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */
import { CategoryDto } from './../dto/category.dto';
import { CategoryService } from './category.service';
import { Controller, Get, Post, Put, Body, HttpStatus, Res } from '@nestjs/common';

@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}
    // here we can create new category using post method
    @Post()
    async createNewCategory(@Res() res, @Body() categoryDto: CategoryDto){
        const createdNewCategory = await this.categoryService.createCategory(categoryDto);
        return res.status(HttpStatus.OK).json({
            message: 'Category has been successfully added',
            category: createdNewCategory,
        });

    }
    // using get method we can get all the products
    @Get()
    async fectchCategory(){
        const getCategory = await this.categoryService.fetchAllCategory()
        console.log(getCategory);
        return getCategory;
    }
}

