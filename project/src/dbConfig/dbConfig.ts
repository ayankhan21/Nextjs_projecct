import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongoDB connected sucessfully!");
    });

    connection.on("error", () => {
      console.log(
        "MongoDB connection error! Please make sure MongoDB is running!"
      );
      process.exit();
    });
  } catch (error) {
    console.log("SOMETHING WENT WRONG!", error);
  }
}
