/**
 * @author S SRINATH
 * @file Description
 * @desc Created on 2020-09-06 1:05:03 pm
 * @copyright S SRINATH
 */
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    categoryName: {type: Array, requried: true },
    description: {type: String, requried: true },
    picture: {type: Buffer, requried: true },
    active: {type: Boolean, requried: true },
});

export interface CategoryModel extends Document {
    categoryName: [string] ,
    description: string,
    picture: Buffer,
    active: boolean,
}