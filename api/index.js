import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import connectDB from "./db/dbConfig.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";

dotenv.config(); // CONFIG DOTENV

const app = express();

connectDB() // CONNECTS SERVER TO DATABASE

app.use(bodyParser.json()); // BODY PARSER MIDDLEWARE


app.use("/api/auth", authRoutes); // AUTH ROUTES
app.use("/api/users", userRoutes); // USER ROUTES
app.use("/api/products", productRoutes); // PRODUCT ROUTES
app.use("/api/carts", cartRoutes); // CART ROUTES
app.use("/api/orders", orderRoutes); // ORDER ROUTES



// TEST ROUTE
app.use("/test", (req, res) => {
    res.json("Hello from server | (testing)");
});

app.use(errorHandler); // ERROR HANDLER MIDDLEWARE

app.listen(process.env.PORT || 7865, () => {
    console.log(`Server running at Port ${process.env.PORT}`);
});