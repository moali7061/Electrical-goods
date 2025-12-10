import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes  from'./routes/productRoutes.js';
import orderRoutes from "./routes/orderRoutes.js"
import "dotenv/config"

import session from 'express-session';

const app = express();

app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173",      
        "http://192.168.144.1:5173",   
        "http://172.20.10.2:5173"],
}));

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "any string",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, // true only if using HTTPS
        sameSite: "lax"
    }
}
app.use(session(sessionOptions));


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/users', productRoutes);
app.use('/api/users', orderRoutes);

app.listen(3000,()=>{
    console.log('connected on port 3000');
})