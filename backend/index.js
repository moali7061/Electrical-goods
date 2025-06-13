import express, { urlencoded } from 'express';
import * as pg from 'pg';
import bcrypt from 'bcrypt';
import cors from 'cors';


const app = express();
const port = 3000;
const saltRounds = 10;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const db = new pg.Client({
    user: 'postgres',
    password: 'ZoZoZoZo1234',
    host: 'localhost',
    port: 5432,
    database: 'school',
});

db.connect().then(console.log("connected to the database"));
app.get("/",async(req, res)=>{
    try{
        console.log("please choose to sign up register or click the 3 dashes to change ur password");
        //res.send("this is "+ x.rows[0]);
    }catch(err)
    {
        res.send(err);
    }
});

app.post("/signup_user", async (req, res)=>{
    try{
        const entered_username = req.body.username;
        const entered_email = req.body.email;
        const entered_password = req.body.password;
        console.log("the user entered "+entered_username +"  " + entered_email + "  "+ entered_password);
        
        const  user_in_db = await db.query(`select * from students where email='${entered_email}' OR username = '${entered_username}'`);
        console.log(user_in_db.rows);
        //we need to check if the username and email matches the data in the database
        //console.log(user_in_db.rows[0].username);

        if(user_in_db.rows.length >0){
            res.status(400).json({message: "try entering another email and password"});
        }else{
                    bcrypt.hash(entered_password, saltRounds, async(err, hash)=> {
                    await db.query(`insert into students (username,email, password) values('${entered_username}','${entered_email}','${hash}')`);
                    res.status(200).json({ message: "user created successfully" });

                    });
            }
        
    }catch(err){
        console.log(err);
        res.status(500).send("something went wrong");
    }
});


app.put("/change_password",async(req, res)=>{
    const old_username = req.body.username;
    const old_email = req.body.email;
    const old_password = req.body.old_password;
    const new_password = req.body.new_password;
    const new_username = req.body.new_username;

    try{
        //const check_username = await db.query(`select username from students where email = ${old_email}`);
        const dbrow = await db.query('SELECT * FROM students WHERE  email= $1', [old_email]);
        
        if(dbrow.rows.length === 0){
            res.status(400).json({message: "the entered email did not found"});
        }
        
        console.log("password in the database is " + dbrow.rows[0].password);

        if(dbrow.rows[0].username === old_username){
            bcrypt.compare(old_password, dbrow.rows[0].password, function(err, result) {

                console.log("Plain password from user:", old_password);
                console.log("Hashed password from DB:", dbrow.rows[0].password);

                if(result){
                    bcrypt.hash(new_password, saltRounds, async(err, hash)=> {
                        await db.query(`update students set password = '${hash}' , username = '${new_username}' where email = '${old_email}'`);
                        res.status(200).json({ message: "user updated successfully" });

                        });
                }else{
                    res.status(400).json({message: "the old password you entered is incorrect"});
                }
            });
        }else{
            res.status(400).json({message: "username did not match old username"});
        }

    }catch{
        res.status(500).json({message: "something went wrong"});
    }


});






app.get("/store_sign_in", (req, res)=>{
    
    const store_id = req.body.store_id;
    try{
        const check = db.query(`select * from store where store_id = ${store_id}`);
        if (check.rows.length > 0 ){
            //redirect to the page where the shop owner see things that he can do
        }
        else{
            res.status(400).json({message: "shop ID not found"});
        }
    }catch{
        res.status(500).json({message: "something went wrong"});
    }
});


app.get("/listing",async(req, res)=>{
    try{
        const products = await db.query("select * from product");
        if(products.rows.length >0)
        {
            console.log(products.rows);
            res.json({all_products: products.rows});
        }
        else
        {
            res.status(200).json({message: "no products in the website yet"})
        }
    }catch{
        res.status(500).json({message: "can not get products now"});
    }
});



app.listen(port, ()=>{
    console.log("connected on port 3000");
});