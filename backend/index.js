import express, { urlencoded } from 'express';
import * as pg from 'pg';
import bcrypt from 'bcrypt';
import cors from 'cors';


const app = express();
const port = 3000;
const saltRounds = 10;

const current_email = '';

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



app.post("/signup_user", async (req, res)=>{
    try{
        const {username, email, password}= req.body;


        console.log("the user entered "+username +"  " + email + "  "+ password);
        
        const  user_in_db_email = await db.query(`select email from students where email='${email}'`);
        const  user_in_db_username = await db.query(`select username from students where email='${email}'`);
        
        if(user_in_db_email.rows.length >0){
            res.send("email_exist");
        }else if(user_in_db_username.rows.length >0){
            res.send("username_exist");
        }else{
                    bcrypt.hash(password, saltRounds, async(err, hash)=> {
                    await db.query(`insert into students (username,email, password) values('${username}','${email}','${hash}')`);
                    res.send( "created");
                    });
            }
        
    }catch(err){
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
        const check = db.query(`select * from store where store_id = '${store_id}'`);
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


app.post("/getproducts",async(req, res)=>{
    try{
        const category = req.body.category;
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


app.post("/log_in_user",async(req, res)=>{
    try{
        const {email, password} = req.body;

        const found_user =await db.query(`select * from students where email = '${email}'`);
        console.log(found_user.rows[0]);
        if(found_user.rows.length > 0){
            const emai_in_db = found_user.rows[0].email;
            const password_in_db = found_user.rows[0].password;
            bcrypt.compare(password, password_in_db, (err, result)=> {
                console.log(result);
                if(result){
                    res.send("correct");
                    console.log("correct");
                }
                else{
                    res.send("not_correct")
                    console.log("not correct");
                }
            });
        }else{
            res.send("user_not_found");
        }



    }catch{
        res.status(500).json({message: "there is error in this method"});
    }
});



app.put('/add_order',async (req, res)=>{
    try{
        const email = req.body.email;
        const product_id = req.body.product_id;
        const product_titlle = req.body.product_title;
        const count = req.body.count;
        const price = req.body.price * count;
        
    }catch(err){
        console.log("there is error:" + err);
    }



});

app.post('/add_to_cart',async (req, res)=>{
    try{
        const product_id = req.body.product_id;
        const username = req.body.username;
        const count = req.body.count;
        const product = await db.query(`select * from product where product_id ='${product_id}'`);
        console.log(product.rows[0]);
        const total_price = product.rows[0].price * count;
        console.log("total price is "+ total_price);
        await db.query(`insert into orders (username, product_id, count, price)values ('${username}', '${product_id}', '${count}', '${total_price}')`);
        const available_count_now = product.rows[0].count - count;
        await db.query(`update product set count = ${available_count_now} where product_id = '${product_id}'`);
        res.status(200).json({message: "item is added to the cart"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "error has occured"});
    }
});




app.listen(port, ()=>{
    console.log("connected on port 3000");
});