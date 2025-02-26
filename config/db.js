import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config(); // Ensure .env file is loaded
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;



//chatgpt
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // Ensure .env file is loaded

// const connectDB = async () => {
//   try {
//     console.log("📡 Connecting to MongoDB...");
//     console.log(`🔗 MongoDB URL: ${process.env.MONGO_URL}`); // Debugging step

//     const conn = await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`✅ Connected To MongoDB: ${conn.connection.host}`.bgMagenta.white);
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message.red);
//     process.exit(1); // Stop the server if DB connection fails
//   }
// };

// export default connectDB;
