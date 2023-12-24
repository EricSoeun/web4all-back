import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const connexion = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected : ${connexion.connection._connectionString}`.bgGreen.bold);
  } catch (error) {
    console.error(`Error : ${error.message}`)
    process.exit(1)
  }
}

