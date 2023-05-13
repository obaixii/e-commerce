import { Product } from "../models/Product.js";

// CREATE PRODUCT
export const createProduct = async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();

        res.json(product);
    } catch (error) {
        next(error);
    }
};

// GET ALL PRODUCT
export const getAllProducts = async (req, res, next) => {
    try {
        const qNew = req.query.new || false;
        const qCategory = req.query.category || "";
        const limit = req.query.limit || 2;

        let products;
        
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(limit);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        return res.status(200).json(products);

    } catch (error) {
        next(error);
    }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res, next) => {
    try {

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );

        res.status(200).json(updatedProduct);

    } catch (error) {
        next(error);
    }
}
// GET PRODUCT BY ID
export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);

    } catch (error) {

    }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json("Product deleted successfully");
    } catch (error) {
        next(error);
    }
};