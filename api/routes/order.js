import express from "express";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
import { createOrder, deleteOrder, getAllOrders, getOrderById, monthlyIncome, updatedOrder } from "../controllers/order.js";

const orderRoutes = express.Router();

// ROUTE FOR CREATE NEW ORDER
orderRoutes.route("/new").post(verifyToken, createOrder);

// ROUTE FOR GETTING ALL ORDER
orderRoutes.route("/all").get(verifyTokenAndAdmin, getAllOrders);

// ROUTE FOR UPDATE ORDER
orderRoutes.route("/order/:id").get(verifyTokenAndAuthorization, getOrderById);

// ROUTE FOR UPDATE ORDER
orderRoutes.route("/order/update/:id").put(verifyTokenAndAuthorization, updatedOrder);

// ROUTE FOR DELETE ORDER
orderRoutes.route("/order/delete/:id").delete(verifyTokenAndAdmin, deleteOrder);

// ROUTE FOR DELETE ORDER
orderRoutes.route("/income").get(verifyTokenAndAdmin, monthlyIncome);

export default orderRoutes;