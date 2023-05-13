import express from "express";
import { Register, Login } from "../controllers/auth.js";

const authRoutes = express.Router();

// Route for Registering a new User 
authRoutes.route("/register").post(Register);

// Route for Signing-In a valid User 
authRoutes.route("/login").post(Login);

export default authRoutes;