import { Order } from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res, next) => {
    try {
        const newOrder = new Order(req.body);
        const order = await newOrder.save();

        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

// GET ALL ORDER
export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);

    } catch (error) {
        next(error);
    }
};

// UPDATE ORDER
export const updatedOrder = async (req, res, next) => {
    try {

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );

        res.status(200).json(updatedOrder);

    } catch (error) {
        next(error);
    }
}
// GET USER ORDER BY ID
export const getOrderById = async (req, res, next) => {
    try {
        const orders = await Order.findOne({ userId: req.params.userId });

        res.status(200).json(orders);

    } catch (error) {
        next(error);
    }
};

// DELETE ORDER
export const deleteOrder = async (req, res, next) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        return res.status(200).json("Order deleted successfully");
    } catch (error) {
        next(error);
    }
};

// MONTHLY INCOME
export const monthlyIncome = async (req, res, next) => {
    try {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const prevMonth = new Date(new Date(lastMonth.getMonth() - 1));

        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: prevMonth }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ])

        res.status(200).json(income);
    } catch (error) {
        next(error);
    }
};