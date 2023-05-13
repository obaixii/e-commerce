import express from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
import { createUser, deleteUser, getAllUsers, getUserById, getUserStats, updateUser } from "../controllers/user.js";

const userRoutes = express.Router();

// ROUTE FOR CREATE NEW USER
userRoutes.route("/user/new").post(verifyTokenAndAdmin, createUser);

// ROUTE FOR GETTING ALL USERS
userRoutes.route("/all").get(verifyTokenAndAdmin, getAllUsers);

// ROUTE FOR GETTING SINGLE USER
userRoutes.route("/user/:id").get(verifyTokenAndAuthorization, getUserById);

// ROUTE FOR UPDATE USER
userRoutes.route("/user/update/:id").put(verifyTokenAndAdmin, updateUser);

// ROUTE FOR DELETE USER
userRoutes.route("/user/delete/:id").delete(verifyTokenAndAdmin, deleteUser);

// ROUTE FOR GETTING USER's STATS
userRoutes.route("/stats").get(verifyTokenAndAdmin, getUserStats);


export default userRoutes;