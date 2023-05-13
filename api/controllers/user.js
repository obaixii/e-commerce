import { User } from "../models/User.js";

// CREATE USER 
// export const createUser = (req, res, next) => {
//     try {

//     } catch (error) {

//     }
// };

// GET ALL USERS
export const getAllUsers = async (req, res, next) => {
    try {
        const query = req.query.new;

        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

        return res.status(200).json(users);

    } catch (error) {
        next(error);
    }
};

// UPDATE USER
export const updateUser = async (req, res, next) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS.SEC
        ).toString();
    }
    try {

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );

        res.status(200).json(updatedUser);

    } catch (error) {
        next(error);
    }
}

// GET USER BY ID
export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        const { password: userPassword, ...other } = user._doc;

        res.status(200).json({ user: other });

    } catch (error) {

    }
};

// DELETE USER
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("User deleted successfully");
    } catch (error) {
        next(error);
    }
};


// GET USER STATS
export const getUserStats = async (req, res, next) => {

    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)

    } catch (error) {
        next(error);
    }
};