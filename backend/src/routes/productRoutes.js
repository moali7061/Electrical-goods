import express from 'express';
import {allProducts, product_category} from '../controllers/productController.js';
 
const router = express.Router();
console.log("PRODUCT ROUTES LOADED");

router.get('/get_all_products', allProducts);
router.post('/product_by_category',product_category)


export default router;