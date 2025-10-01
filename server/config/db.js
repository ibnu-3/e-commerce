import  mongoose  from "mongoose"

const connectDB =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("<<<<<<<<<< MongoDB Connected!>>>>>>>>>>".cyan.bold.underline)
    } catch (error) {
        console.log(`MongoDb error:`.red.bold, error)
    }
}
export default connectDB