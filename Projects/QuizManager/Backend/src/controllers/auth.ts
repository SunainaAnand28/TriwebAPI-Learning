import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken" ; 

import User from "../models/user";

interface ReturnResponse {
    status: "success" | "error";
    message: String,
    data: {}
}

// REGISTER
const registeruser = async (req: Request, res: Response, next: NextFunction) => {


    let resp: ReturnResponse;

    try {
        const email = req.body.email;
        const name = req.body.name;
        const password = await bcrypt.hash(req.body.password, 12);

        const user = new User({ email, name, password });
        const result = await user.save();

        if (!result) {
            resp = { status: "error", message: "No results Found", data: {} };
            res.send(resp);
        } else {
            resp = { status: "success", message: "Registration Done", data: { userId: result._id } };

            res.send(resp);
        }

    } catch (error) {
        resp = { status: "error", message: "Something went wrong !", data: {} };
        res.status(500).send(resp);
    }

};

// login 
const loginUser = async (req: Request, res: Response) => {
    let resp: ReturnResponse;

    try {
        const email = req.body.email;
        const password = req.body.password;

        // find your user with email 
        const user = await User.findOne({ email })

        if(!user){
            resp = { status: "error", message: " No user exist", data: {} };
            return res.status(401).send(resp);
            
        }
        
        // verify user password using bycrypt
        const status = await bcrypt.compare(password, user.password);
        
        // then decide
        if (status){
            
            const token = jwt.sign({ userId : user._id}, "myprivatekey1234",{expiresIn: "1h"} );
            
            resp = { status: "success", message: "user logged in!", data: {} };
            res.send(resp);

        } else {
            resp = { status: "error", message: "credentials mismatch", data: {} };
            res.status(401).send(resp);
        }


    } catch (error) {
        resp = { status: "error", message: "Something went wrong!", data: {} };
        return res.status(500).send(resp);
    }


}


export { registeruser, loginUser };