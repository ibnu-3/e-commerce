import cloudinary from "../config/cloudinary.js"
import Product from "../models/Product.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).populate('user', 'name email').sort({ createdAt: -1 })
        if (!products) {
            return res.status(404).json({ message: "Products not found" })
        }
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}
export const getOneProduct = async (req, res) => {
    try {
        const product = await Product.find({}).populate('user', 'name email').sort({ createdAt: -1 })
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}

//create product 
export const createProduct = async (req, res) => {
    const { name, category,images,  oldPrice, newPrice, countInStock } = req.body;
    
    try {
        // Validate input
        if (!name || !category || !images || !oldPrice || !newPrice || countInStock === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }
        let imageUrls = []
        for (const image of images) {
            const result = await cloudinary.uploader.upload(image.path);
            imageUrls.push(result.secure_url);
            // Create a new product instance
            const newProduct = new Product({
                name,
                category,
                image: imageUrls, // Use the URLs obtained from Cloudinary
                oldPrice,
                newPrice,
                countInStock,
                user:req.user._id
            });

            // Save the product to the database
            await newProduct.save();

            // Respond with the created product
            return res.status(201).json(newProduct);
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}