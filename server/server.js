import express from 'express';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors';



const app = express();
const PORT = process.env.PORT || 3232;

mongoose.connect(
    "mongodb+srv://bhaveshkar9000:Sunny@cluster0.0qpxksp.mongodb.net/"
).then(()=>console.log("MongoDb is connected"))
.catch((error)=>console.log(error));

app.use(
    cors({
        origin:'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());


app.listen(PORT, ()=>console.log(`Server is now running on port ${PORT}`))