/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */
import { ProductsService } from './products.service';
import { Controller, Get, Post, Put, Body, HttpStatus, Res, Param } from '@nestjs/common';
import { ProductDto } from './../dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}
    // Create new products using post method
   @Post()
   async createNewProducts(@Res() res, @Body() productsDto: ProductDto){
       const createdNewCategory = await this.productService.createProducts(productsDto);
       return res.status(HttpStatus.OK).json({
           message: 'Category has been successfully added',
           category: createdNewCategory,
       });

   }
   // Get all the products using get method
   @Get()
   async fectchAllProduct(){
       const getAllCategory = await this.productService.fetchAllProducts()
       return getAllCategory;
   }
//    @Get(':productById')
//    async fetchCategoryById(@Param('productById') productById){
//        const getProductById = await this.productService.fetchProdcutsById(productById);
//        return getProductById;
//    }
// fecthing no of product using get method
   @Get('noofproducts')
   async noofProduct(): Promise<any>{
       const fetchNoofProducts = await this.productService.fetchNoOfProduct();
       console.log(fetchNoofProducts);
       return fetchNoofProducts;
   }
}

