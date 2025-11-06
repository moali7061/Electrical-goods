import express from 'express';
import { signUpUser, changePassword, login} from '../controllers/userController.js';
 
const router = express.Router();

router.post('/signup_user', signUpUser);

router.post('/change_password', changePassword);

router.post('/log_in_user', login);
export default router;