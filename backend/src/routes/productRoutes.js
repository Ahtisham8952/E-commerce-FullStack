// routes/productRoutes.js
import express from "express";
const router = express.Router();

import { createProduct, getAllProducts,getProductById } from "../controllers/productController.js";

// Define routes and their handlers
router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:productId', getProductById);

export default router;
