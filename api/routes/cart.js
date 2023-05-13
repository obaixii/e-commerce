import express from "express";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
import { createCart, deleteCart, getAllCarts, getCartById, updateCart } from "../controllers/cart.js";

const cartRoutes = express.Router();

// ROUTE FOR CREATE NEW CART
cartRoutes.route("/new").post(verifyToken, createCart);

// ROUTE FOR GETTING ALL CART
cartRoutes.route("/all").get(verifyTokenAndAdmin, getAllCarts);

// ROUTE FOR GETTING SINGLE CART
cartRoutes.route("/cart/:id").get(verifyTokenAndAuthorization, getCartById);

// ROUTE FOR UPDATE CART
cartRoutes.route("/cart/update/:userId").put(verifyTokenAndAuthorization, updateCart);

// ROUTE FOR DELETE CART
cartRoutes.route("/cart/delete/:id").delete(verifyTokenAndAuthorization, deleteCart);


export default cartRoutes;