import mongoose, { ConnectOptions } from "mongoose";

let database: mongoose.Connection;

export const connect = async () => {
  const uri = "mongodb://mongo_db:27017/db";
  if (database) {
    return;
  }
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    database = mongoose.connection;
    console.log("Connected to database");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

export const disconnect = async () => {
  if (!database) {
    return;
  }
  try {
    await mongoose.disconnect();
    console.log("Disconnected from DB");
  } catch (err) {
    console.log("Error disconnecting from DB", err);
  }
};
