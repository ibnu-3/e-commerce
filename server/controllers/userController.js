import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken =(res,id)=>{
 const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'30d'})
 res.cookie('jwt',token, {
    httpOnly:true,
    sameSite:'strict',
    maxAge: 30* 24* 60 * 60*1000
 })
 return token
}

export const registerUser =async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:'server error',error:error.message})
    }
}