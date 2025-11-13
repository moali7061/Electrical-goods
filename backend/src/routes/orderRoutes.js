import express from 'express';
import {add_order_controller} from '../controllers/orderController.js';
 
const router = express.Router();

router.post('/add_order', add_order_controller);

export default router;