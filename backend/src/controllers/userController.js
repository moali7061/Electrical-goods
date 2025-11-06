import {registerUser,change_password, login_user} from '../services/userService.js'

export const signUpUser = async(req, res)=>{
    try{
        const {username, email, password} = req.body;
        const result = await registerUser(username, email, password);
        
        res.status(200).json({message: result});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

export const changePassword = async(req, res)=>{
    try{
        const {email, old_password, new_password} = req.body;
        const result = await change_password(email, old_password, new_password);
        res.status(200).json({message: result});
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
}

//to be done "the login part"

export const login = async(req, res)=>{
    try{
        const {email, password}= req.body;
        const result = await login_user(email, password);
        res.status(200).json({message: result});
    }catch(err){
        res.status(500).json({message: err.message});
        console.log(err);
    }
}