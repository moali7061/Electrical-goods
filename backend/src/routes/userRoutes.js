import express from 'express';
import { signUpUser, changePassword, login} from '../controllers/userController.js';
 
const router = express.Router();

router.post('/signup_user', signUpUser);

router.post('/change_password', changePassword);

router.post('/log_in_user', login);

router.get('/check_session', (req, res) => {
    if (req.session && req.session.userId) {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ message: 'logout failed' });
        res.clearCookie('connect.sid');
        res.json({ message: 'logged out' });
    });
});
export default router;