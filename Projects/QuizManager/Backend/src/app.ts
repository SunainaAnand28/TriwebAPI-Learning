import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import UserRoute from "./routers/user";
import authRoute from "./routers/auth";
import ProjectError from "./helper/error";

const app = express();

interface ReturnResponse {
    status: "success" | "error";
    message: String,
    data: {}
}
const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());




declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
    }
}


app.get("/", (req, res) => {
    res.send("hello");
});

// Redirect /user to UserRoute
app.use("/user", UserRoute);

// Redirect /auth
app.use("/auth", authRoute);


app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {

    // Email to corresponding email
    // logger for error 

    let message: String;
    let statusCode: number;
    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    } else {
        message = "Something went wrong please try after sometimes!";
        statusCode = 500;
    }
    let resp: ReturnResponse = { status: "error", message, data: {} }
    if (!!err.data) {
        resp.data = err.data;
    }

    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);

})

mongoose.connect(connectionString
).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server Connected");
    });
}).catch((err: mongoose.CallbackError) => {
    console.error("Failed to connect to MongoDB", err);
});

