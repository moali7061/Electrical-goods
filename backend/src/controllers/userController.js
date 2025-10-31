import userService from '../services/userService.js'

export const signUpUser = async(req, res)=>{
    try{
        const {username, email, password} = req.body;
        const result = await userService.registerUser(username, email, password);
        
        res.status(200).json({message: result});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}