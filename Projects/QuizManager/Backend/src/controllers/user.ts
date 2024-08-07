import { RequestHandler } from "express";

import User from "../models/user";
import ProjectError from "../helper/error";
import { ReturnResponse } from "../utils/interfaces";

// GET
const getUser: RequestHandler = async (req, res, next) => {


    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;
        if (req.userId != req.params.userId) {
            const err = new ProjectError("You are not authorized");
            err.statusCode = 401;
            err.data = { hi: "It is error" };
            throw err;
        }

        const user = await User.findById(userId, { name: 1, email: 1 });

        if (!user) {
            const err = new ProjectError("No user found");
            err.statusCode = 401;
            throw err;
        } else {
            resp = { status: "success", message: "user found", data: { user: user } };
            res.status(200).send(resp);
        }

    } catch (error: any) {
        next(error);
    }

}


// UPDATE
const updateUser: RequestHandler = async (req, res, next) => {
    let resp: ReturnResponse;

    try {

        if (req.userId != req.body._id) {
            const err = new ProjectError("You are not authorized");
            err.statusCode = 401;
            throw err;
        }

        const userId = req.body._idId;
        const user = await User.findById(userId);

        if (!user) {
            const err = new ProjectError("No user found");
            err.statusCode = 401;
            throw err;
        }

        user.name = req.body.name;
        await user.save();

        resp = { status: "success", message: "User updated successfully", data: { user: user } };
        return res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}





export { getUser, updateUser };