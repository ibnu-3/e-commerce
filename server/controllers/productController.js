import cloudinary from "../config/cloudinary.js"
import Product from "../models/Product.js"
import path from 'path'
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).populate('user', 'email isAdmin').sort({ createdAt: -1 })
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
        const product = await Product.findById(req.params.id).populate('user', 'email isAdmin').sort({ createdAt: -1 })
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
    const { name, category, oldPrice,image, newPrice, countInStock } = req.body;
   
    try {

        let imageUrl = ''
        if (image) {
            try {
                const result = await
                    cloudinary.uploader.upload(image, { folder: 'product_images', use_filename: true, })

                imageUrl = result.secure_url;
            } catch (error) {
                console.log(error.message)
                return res.status(500).json({ message: "server error", error: error.message })
            }

            // Create a new product instance
            const newProduct = new Product({
                name,
                category,
                image: imageUrl,
                oldPrice,
                newPrice,
                countInStock,
                user: req.user._id
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
export const updateProduct = async (req, res) => {
    const { name, category, image, oldPrice, newPrice, countInStock, isPinned } = req.body;

    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        if (req.user && req.user.isAdmin) {
            product.name = name || product.name;
            product.category = category || product.category;
            product.oldPrice = oldPrice || product.oldPrice;
            product.newPrice = newPrice || product.newPrice;
            product.countInStock = countInStock || product.countInStock;
            product.isPinned = isPinned || product.isPinned;

            if (image && image !== product.image) {
                const result = await cloudinary.uploader.upload(image, {
                    folder: 'product_image'
                })
                product.image = await result.secure_url;
            }

            const updatedProduct = await product.save()
            return res.status(201).json(updatedProduct)
        } else {
            return res.status(403).json({ message: "Not authorized ,admin only" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}

//del=te product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        if (req.user && req.user.isAdmin) {
           
            await product.deleteOne();
            return res.status(200).json({ message: "product deleted" })
        } else {
            return res.status(403).json({ message: "not authorized ,admin only" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}

//
export const getPinnedProduct = async (req, res) => {
    try {
        const products = await Product.find({ isPinned: true }).populate('user', 'email isAdmin').sort({ createdAt: -1 })
        if (!products) {
            return res.status(404).json({ message: "Products not found" })
        }
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}