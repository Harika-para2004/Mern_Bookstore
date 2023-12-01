import express, { response } from 'express';
import {PORT, mongoUrl} from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js'
import BookRoute from './routes/BookRoute.js'
import cors from 'cors'
const app = express();

//middleware for parsing
app.use(express.json())

//Middleware for handling CORS POLICY
//Option1 :Allow All Origins with Default of cors(*)
app.use(cors());
//Option2 : Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type:'],
//     })
// );

app.get('/',(req,res)=>{
    console.log(request);
    return res.status(234).send('Welcome my dear harika!!')
});

app.use('/books',BookRoute);

mongoose.connect(mongoUrl)
.then(() => {
    console.log('database connected ');
    app.listen(PORT, ()=>{
        console.log(`App is listening on ${PORT}`);
    })
})
.catch((e) => {
    console.log(e);
})

