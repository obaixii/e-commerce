import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

export default connectDB;