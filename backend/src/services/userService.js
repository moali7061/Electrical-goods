import { findByEmail, findByUser, createUser, changePassword, old_password_returned} from "../repositories/userRepository.js";
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const registerUser = async(username, email, password)=>{
    const email_exist = await findByEmail(email);
    if (email_exist) return("email exists");

    const username_exist = await findByUser(username);
    if (username_exist) return("username exists");

    bcrypt.hash(password, saltRounds, async function(err, hash) {
        await createUser(username, email, hash);       
    });
    return ("created");
}

export const change_password = async(email, old_password, new_password)=>{
    try{
        const old_password_in_db = await old_password_returned(email);

        console.log(!old_password_in_db);

        if(old_password_in_db == null){
            return "email not found";
        }

        const result = await bcrypt.compare(old_password, old_password_in_db);

        if(!result){
            return("old password entered is incorrect");
        }

        const hash = await bcrypt.hash(new_password,saltRounds);

        await changePassword(email, hash);
        return ("password is changed successfully");
    }catch(err){
        console.log(err);
    }
}


export const login_user = async(email, password)=>{
    try{
        const email_exist = await findByEmail(email);
        if(!email_exist){
            return("email does not exists please try entering the correct email");
        }

        const password_in_db = await old_password_returned(email);

       const result = await bcrypt.compare(password, password_in_db);

       return result? "login successfully":"password is incorrect please enter the correct password";
        

    }catch(err){
        console.log(err);
    }
}