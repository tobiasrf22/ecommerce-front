import mongoose, { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema({
    title: { type: String, require: true },
    description: String,
    price: { type: Number, require: true },
    category:{ type:mongoose.Types.ObjectId, ref: 'Category' },
    properties:{type:Object},
});

export const Product = models.Product || model('Product', ProductSchema);