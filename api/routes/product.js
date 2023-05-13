import express from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.js";

const productRoutes = express.Router();

// ROUTE FOR CREATE NEW PRODUCT
productRoutes.route("/new").post( createProduct);

// ROUTE FOR GETTING ALL PRODUCT
productRoutes.route("/all").get(getAllProducts);

// ROUTE FOR GETTING SINGLE PRODUCT
productRoutes.route("/product/:id").get(getProductById);

// ROUTE FOR UPDATE PRODUCT
productRoutes.route("/product/update/:id").put(verifyTokenAndAdmin, updateProduct);

// ROUTE FOR DELETE PRODUCT
productRoutes.route("/product/delete/:id").delete(verifyTokenAndAdmin, deleteProduct);


export default productRoutes;