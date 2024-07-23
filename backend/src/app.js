import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app= express()
app.use(cors({
  origin: 'https://e-commerce-full-stack-one.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(bodyParser.json());
// routes import

import userRoutes from "./routes/user.routes.js"
app.use('/api/users', (req, res, next) => {
    console.log('Received request:', req.method, req.url);
    next();
  }, userRoutes);


app.use(express.json({limit:'20kb'}))
app.use(express.urlencoded({extended:true,limit:'20kb'}))
app.use(express.static("public"))

export default app