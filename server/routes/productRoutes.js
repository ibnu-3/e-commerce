import express from "express";
//import { getUserProfile, loginUser, registerUser, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { createProduct, getAllProducts, getOneProduct } from "../controllers/productController.js";
const router =express.Router()

router.post('/create',protect, createProduct)
router.get('/', getAllProducts)
router.get('/:id', getOneProduct)

export default router