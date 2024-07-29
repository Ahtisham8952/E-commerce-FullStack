import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Initialize express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://e-commerce-full-stack-r277.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '20kb' }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/productRoutes.js";

// Use routes
app.use('/api/users', (req, res, next) => {
  console.log('Received request:', req.method, req.url);
  next();
}, userRoutes);

app.use('/api/products', (req, res, next) => {
  console.log('Received request:', req.method, req.url);
  next();
}, productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error Occurred:");
  console.error("Message:", err.message);
  console.error("Stack:", err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Something went wrong!',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

export default app;
