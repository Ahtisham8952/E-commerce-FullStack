// models/product.js
import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ['Breeze Pro', 'Breeze Prime', 'Breeze Elite'],
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL or path to the image
  price: { type: Number, required: true }, // Price in CAD
  mgAmount: { type: Number, required: true }, // mg amount
  mgVariants: [{ type: Number }],
});

const Product = mongoose.model('Product', productSchema);


export default Product;
