import { User } from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export const Register = async (req, res, next) => {
    try {
        let password = req.body.password;

        const hash = await CryptoJS.AES.encrypt(
            password,
            process.env.PASS_SEC
        ).toString();

        req.body.password = hash;

        const newUser = await User.create(req.body);

        res.json({
            message: "New User has been registered",
            newUser
        });
    } catch (error) {
        next(error);
    }
}

export const Login = async (req, res, next) => {
    try {
        // Get `userName` and `password` from request body
        const { userName, password } = req.body;

        // Error if `userName` missing
        if (!userName) return res.status(401).json("Please enter username!");


        // Error if `password` missing
        if (!password) return res.status(401).json("Please enter password!");

        // Find user with `userName`
        const user = await User.findOne({ userName });

        // Error if no user found
        if (!user) return res.status(401).json("No User Found!");

        // Decrypt stored password
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC,
            {
                expiresIn: "3d"
            }
        );

        // Error if submitted password doesn't match stored password
        if (originalPassword !== req.body.password) return res.status(401).json("Wrong Credentials");

        const { password: userPassword, ...other } = user._doc;

        res.status(200).json({ user: other, userKey: accessToken });

    } catch (error) {
        next(error);
    }
}