import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import UserRoute from "./routers/user";
import authRoute from "./routers/auth";
import quizRoute from "./routers/quiz";
import examRoute from "./routers/exam";
import reportRoute from "./routers/report"
import ProjectError from "./helper/error";

const app = express();

interface ReturnResponse {
    status: "success" | "error";
    message: string,
    data: {}
}
const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());




declare global {
    namespace Express {
        interface Request {
            userId: string;
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

// Redirect /quiz
app.use("/quiz", quizRoute);

// Redirect /exam
app.use("/exam", examRoute);

// Redirect /exam
app.use("/report", reportRoute);

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {

    // Email to corresponding email
    // logger for error 

    let message: string;
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

