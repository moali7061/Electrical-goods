import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes  from'./routes/productRoutes.js';
import "dotenv/config"

import session from 'express-session';

const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));

const sessionOptions = {
    secret: process.env.NeTIFY_URL || "any string",
    resave: false,
    saveUninitialized: false,
}
app.use(session(sessionOptions));


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/users', productRoutes);


app.listen(3000,()=>{
    console.log('connected on port 3000');
})