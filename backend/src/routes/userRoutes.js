import express from 'express';
import { signUpUser } from '../controllers/userController.js';
 
const router = express.Router();

router.post('/signup_user', signUpUser);


export default router;