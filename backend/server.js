import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";  // Connects mongoDB to webpage
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());  // This allows us to use JSON data in the req.data

app.use("/api/products", productRoutes);  // This is the route for the products

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
