import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.token;

    if (!authHeader) {
        return res.status(401).json("Token missing");
    }

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not Authenticated | Invalid Token");
    }
};

export const verifyTokenAndAuthorization = async (req, res, next) => {


    verifyToken(req, res, async () => {

        if (req.user._id === req.params.id || req.user.isAdmin) {
            return next();
        } else {
            return res.status(403).json("You are not Authorized | Access denied");
        }
    });
};

export const verifyTokenAndAdmin = async (req, res, next) => {

    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            return next();
        } else {
            return res.status(403).json("You must be Admin to perform this action");
        }
    });
};