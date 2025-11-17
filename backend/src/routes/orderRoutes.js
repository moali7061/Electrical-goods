import express from 'express';
import {add_order_controller, get_user_order} from '../controllers/orderController.js';
 
const router = express.Router();

router.post('/add_order', add_order_controller);
router.get('/get_order', get_user_order)

export default router;