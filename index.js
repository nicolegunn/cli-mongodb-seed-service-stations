import dotenv from "dotenv";
import mongoose from "mongoose";
import Station from "./models/stations.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const seedDataPath = path.resolve(__dirname, "data", "seedData.json");
const seedData = JSON.parse(fs.readFileSync(seedDataPath, "utf-8"));

console.log("MongoDB URI:", process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.error("Database Connection Error:", err);
  });

const closeDB = () => {
  mongoose.connection
    .close()
    .then(() => {
      console.log("Connection Successfully Closed");
    })
    .catch((err) => {
      console.error("Error On Closing:", err);
    });
};

const seedStations = () => {
  Station.insertMany(seedData)
    .then((stations) => {
      console.info(`${stations.length} stations added`);
      closeDB();
    })
    .catch((err) => {
      console.error("Error Seeding Data:", err.message);
      closeDB();
    });
};

export { seedStations };
