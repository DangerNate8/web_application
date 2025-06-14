import mongoose from 'mongoose';  // This is the mongoose library for MongoDB
import Product from '../models/product.model.js';  // This is the model for the product

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.error("Error in getting products:", error.message);
        res.status(500).json({ success: false, message: 'Server error'});
    }
};

export const createProduct = async (req, res) => {
    const product = req.body;  // This is the product that is being added
    
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: 'Please provide all fields'});
    }
    
    const newProduct = new Product(product)
    
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.error("Error in creating a product:", error.message);
        res.status(500).json({ success: false, message: 'Server error'});
    } 
};

export const deleteProduct = async (req, res) => {
    const {id} = req.params;    
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product id" });
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product deleted'});
    } catch (error) {
        console.error("Error in deleting a product:", error.message);
        res.status(500).json({ success: false, message: 'Server can not find product'});
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;    // params is the parameters in the URL
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({ success: true, data: updatedProduct});
    } catch (error) {
        console.error("Error in updating a product:", error.message);
        res.status(500).json({ success: false, message: 'Server error'});
    }
};
