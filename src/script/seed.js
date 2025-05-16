import mongoose from "mongoose";
import NewArrivals from "../models/products.js";
const MONGODB_URI = "mongodb://localhost:27017/ecommerce";

const seedProducts = [
  {
    name: "T-shirt with Tape Details",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747402375/image_7_q4olzi.png",
    price: 120,
    rating: 4.7,
    isNewArrival: false
  },
  {
    name: "Skinny Fit Jeans",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747402455/image_8_pxlauc.png",
    price: 240,
    rating: 4.4,
    isNewArrival: false
  },
  {
    name: "Checkered Shirt",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747402551/image_9_vyepzy.png",
    price: 180,
    rating: 4.4,
    isNewArrival: false
  },
  {
    name: "Sleeve Striped T-shirt",
    imageUrl: "https://res.cloudinary.com/dsjxx976j/image/upload/v1747402600/image_10_gllk8z.png",
    price: 130,
    rating: 4.4,
    isNewArrival: false
  }
];

const seedDB = async () => {
  await mongoose.connect(MONGODB_URI);
  await NewArrivals.insertMany(seedProducts);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
