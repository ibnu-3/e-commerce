import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/User.js'

const generateToken = (res, id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
    return token
}

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "user already found" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })
        generateToken(res, user._id)
        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = User.findOne({ email })
        if (user && (await bcrypt.compare(password, user.password))) {
            generateToken(res, user._id)
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            })
        } else {
            return res.status(401).json({ message: 'Invalid email or password' })
        }


    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'server error', error: error.message })
    }
}