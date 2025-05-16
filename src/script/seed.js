import mongoose from "mongoose";
import NewArrivals from "../models/products.js";
const MONGODB_URI = "mongodb+srv://krishnakantsahu916:depju7Wv2ZcNXLpt@cluster0.1jk8tke.mongodb.net/";

const seedProducts = [
  {
    name: "VERTICAL STRIPED SHIRT",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747320693/image_7_fp2txl.png",
    price: 212,
    rating: 4.7,
    isNewArrival: true
  },
  {
    name: "COURAGE GRAPHIC T-SHIRT",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747320819/image_8_bwhenn.png",
    price: 145,
    rating: 4.4,
    isNewArrival: true
  },
  {
    name: "LOOSE FIT BERMUDA SHORTS",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747320919/image_9_hanjby.png",
    price: 80,
    rating: 4.4,
    isNewArrival: true
  },
  {
    name: "FADED SKINNY JEANS",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747321005/image_10_ax0foq.png",
    price: 210,
    rating: 4.4,
    isNewArrival: true
  }
];

const seedDB = async () => {
  await mongoose.connect(MONGODB_URI);
  await NewArrivals.insertMany(seedProducts);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
