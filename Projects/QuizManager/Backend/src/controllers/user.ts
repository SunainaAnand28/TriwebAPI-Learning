// send/recieve data to/from database via model
import { Request, Response, NextFunction } from "express";


import User from "../models/user";

interface ReturnResponse {
    status: "success" | "error";
    message: String,
    data: {}
}


// GET
const getUser = async (req: Request, res: Response, next: NextFunction ) => {
   

    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;
        if(req.userId != req.params.userId){
            const err = new Error ("You are not authorized");
            //err.statusCode = 
            throw err;
        }

        const user = await User.findById(userId, { name: 1, email: 1 });

        if (!user) {
            resp = { status: "error", message: "No user Found", data: {} };
            res.send(resp);
        } else {
            resp = { status: "success", message: "user found", data: { user: user } };
            res.send(resp);
        }

    } catch (error) {
        next(error);
    }

}


// UPDATE
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;

    try {

        if(req.userId != req.body._id){
            const err = new Error ("You are not authorized");
            //err.statusCode = 
            throw err;
        }

        const userId = req.body._idId;
        const user = await User.findById(userId);

        if (!user) {
            resp = { status: "error", message: "No user found", data: {} };
            return res.status(404).send(resp);
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