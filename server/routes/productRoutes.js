import express from "express";
//import { getUserProfile, loginUser, registerUser, updateUserProfile } from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, getPinnedProduct, updateProduct } from "../controllers/productController.js";
import upload from "../middleware/uploadMiddleware.js";
const router =express.Router()

router.post('/',protect, upload.array('images', 4), createProduct)
router.put('/edit/:id',protect,admin, updateProduct)
router.delete('/:id',protect,admin, deleteProduct)
router.get('/', getAllProducts)
router.get('/:id', getOneProduct)
router.get('/new/pinned', getPinnedProduct)

export default router