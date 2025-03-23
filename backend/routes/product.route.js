import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);  // GET request to get all products form the controller file
router.post("/", createProduct); // POST request to add a product from the controller file
router.delete("/:id", deleteProduct);  // DELETE request to delete a product from the controller file   
router.put("/:id", updateProduct);  // PUT request to update a product from the controller file 

export default router;  // Export the router for use in other files