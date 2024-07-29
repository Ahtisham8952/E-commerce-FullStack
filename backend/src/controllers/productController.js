// controllers/productController.js
import Product from "../models/product.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { id, category, title, image, mgAmount, mgVariants,description,price } = req.body;

    // Validate mgVariants array length (should be 2)
    if (!Array.isArray(mgVariants) || mgVariants.length !== 2) {
      return res.status(400).json({ error: 'mgVariants must be an array of exactly 2 numbers' });
    }

    const product = new Product({ id, category, title, image, mgAmount, mgVariants,description,price });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ id: productId });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
