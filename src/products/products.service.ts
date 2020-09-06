/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from '../schemas/product.schema';
import { ProductDto } from '../dto/product.dto'

@Injectable()
export class ProductsService {
    constructor(@InjectModel('products') private readonly productModel: Model<ProductModel>) { }

    // Create new category using our service along with schema , dto
    async createProducts(productsDto: ProductDto) {
        const addNewProduct = await this.productModel(productsDto);
        return addNewProduct.save();
    }
    // Get all categorys 
    async fetchAllProducts(): Promise<ProductModel[]> {
        const getAllCategory = await this.productModel.find().exec();
        return getAllCategory;
    }
    // // Get CategoryById 
    // async fetchProdcutsById(categoryById): Promise<ProductModel[]> {
    //     const getCategoryById = await this.productModel.findById(categoryById).exec();
    //     return getCategoryById;

    // }

    // Here we have used mongo query for fetching no of products
    async fetchNoOfProduct(): Promise<ProductModel[]> {
        const getNoOfProductrs = await this.productModel.aggregate([
            { $unwind: '$id_category' },
            { $group: { _id: '$id_category', count: { $sum: 1 } } }
        ],function(err, result){
            console.log(result);
        });
        return getNoOfProductrs;
    }
}

