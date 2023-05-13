import { Cart } from "../models/Cart.js";

// CREATE CART
export const createCart = async (req, res, next) => {
    try {
        const newCart = new Cart(req.body);
        const cart = await newCart.save();

        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

// GET ALL CART
export const getAllCarts = async (req, res, next) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);

    } catch (error) {
        next(error);
    }
};

// UPDATE CART
export const updateCart = async (req, res, next) => {
    try {

        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );

        res.status(200).json(updatedCart);

    } catch (error) {
        next(error);
    }
}
// GET USER CART BY ID
export const getCartById = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });

        res.status(200).json(cart);

    } catch (error) {

    }
};

// DELETE CART
export const deleteCart = async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).json("Cart deleted successfully");
    } catch (error) {
        next(error);
    }
};