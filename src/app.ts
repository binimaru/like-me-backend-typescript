import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth-routes';
import ResponseError from './types/Error';
import { StatusCodes } from 'http-status-codes';


const app = express();

app.use(bodyParser.json())

app.use('/auth', authRoutes);

app.use((error: ResponseError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message,
        name: error.name
    });
});
mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.y1mfv.mongodb.net/like-me?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
    .then(() => {
        app.listen(3000);
        console.log('connected')
    })
    .catch(() => {
        console.log('couldnt connect to the database');
    })
