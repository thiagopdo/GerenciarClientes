import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Conectar ao MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connectado: ${conn.connection.host} ✔✔✔`);
  } catch (error) {
    console.error(`Erro: ${error.message} 💥💥💥`);
    process.exit(1);
  }
};

export default connectDB;
