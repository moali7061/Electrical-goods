import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes  from'./routes/productRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/users', productRoutes);


app.listen(3000,()=>{
    console.log('connected on port 3000');
})