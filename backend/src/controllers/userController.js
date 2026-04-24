import {registerUser,change_password, login_user} from '../services/userService.js'
import { findByEmail } from '../repositories/userRepository.js';
import nodemailer from 'nodemailer';

export const signUpUser = async(req, res)=>{
    try{
        const {username, email, password} = req.body;

        if (!username || !username.trim()) {
            return res.status(400).json({ message: "You did not enter username" });
        }

        if (!email || !email.trim()) {
            return res.status(400).json({ message: "You did not enter email" });
        }

        if (!password || !password.trim()) {
            return res.status(400).json({ message: "You did not enter password" });
        }

        const result = await registerUser(username, email, password);
        if(result =="created"){
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:{
                    user: 'betterFurniturebetterfuture@gmail.com',
                    pass: 'yjnp bzhj gobe lgfn'
                }
            });

            const subject = "welcome to better furniture better future";
            const mailOptions = {
                from: 'betterFurniturebetterfuture@gmail.com',
                to: email,
                subject: subject,
                text: 'this is a test email. your account is created successfully'
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log("emailerror: ", error)
                }else{
                    console.log("Email sent:", info.response);
                }
            })
        }
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
        if (!email || !email.trim()) {
            return res.status(400).json({ message: "You did not enter email" });
        }

        if (!password || !password.trim()) {
            return res.status(400).json({ message: "You did not enter password" });
        }
        const result = await login_user(email, password);
        const user = await findByEmail(email)
        if (result==="correct") {
             req.session.userId = user.id;
             console.log("request session id = "+ req.session.userId);
             req.session.username = user.username;
             const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'betterFurniturebetterfuture@gmail.com',
                pass: 'yjnp bzhj gobe lgfn'
            }
        });

        const subject = "welcome to better furniture better future";
        const mailOptions = {
            from: 'betterFurniturebetterfuture@gmail.com',
            to: email,
            subject: subject,
            text: 'your account logged in successfully'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log("emailerror: ", error)
            }else{
                console.log("Email sent:", info.response);
            }
        })    
        }
        
        res.status(200).json({message: result});
    }catch(err){
        res.status(500).json({message: err.message});
        console.log(err);
    }
}

export const get_user_id = async(req, res)=>{
    console.log("requesttt session id = "+req.session.userId);
    res.send({user_id: req.session.userId})
    
}