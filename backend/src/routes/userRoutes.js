import express from 'express';
import { signUpUser, changePassword} from '../controllers/userController.js';
 
const router = express.Router();

router.post('/signup_user', signUpUser);

router.post('/change_password', changePassword);

export default router;