/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    productName: {type: String, requried: true },
    productPrice: {type: Number, requried: true },
    id_category: {type: Number, requried: true },
});

export interface ProductModel extends Document {
    categoryName: string,
    productPrice: number,
    id_category: number,
}
