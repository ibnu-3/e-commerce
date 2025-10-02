import express from "express";
//import { getUserProfile, loginUser, registerUser, updateUserProfile } from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../controllers/productController.js";
const router =express.Router()

router.post('/create',protect, createProduct)
router.put('/edit/:id',protect,admin, updateProduct)
router.delete('/:id',protect,admin, deleteProduct)
router.get('/', getAllProducts)
router.get('/:id', getOneProduct)

export default router