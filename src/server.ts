import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// getting-started.js

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/basic-mongoose");
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server running on ${port} port`);
    });
  } catch (error) {
    console.log(`Database connection error ${error}`);
  }
}

bootstrap();
