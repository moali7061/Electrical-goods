import express from 'express';
import {allProducts} from '../controllers/productController.js';

const router = express.Router();
router.get('/get_all_products', allProducts);
export default router;