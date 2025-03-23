import mongoose from "mongoose";    

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true    // createdAt and updatedAt fields
});

// Tells mongoose to create a collection called 'Product' based on the productSchema
const Product = mongoose.model('Product', productSchema);

export default Product;     // Export the Product model for use in other files
