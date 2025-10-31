import { findByEmail, createUser} from "../repositories/userRepository.js";
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const registerUser = async(username, email, password)=>{
    const email_exist = await findByEmail(email);
    if (email_exist) return("email exists");


    bcrypt.hash(password, saltRounds, async function(err, hash) {
        await createUser(username, email, hash);       
    });
    return ("created");
}