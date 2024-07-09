import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import UserRoute from "./routers/user";
import authRoute from "./routers/auth";

const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global{
    namespace Express {
        interface Request{
            userId: String;
        }
    }
}


app.get("/", (req, res) => {
    res.send("hello");
});

// Redirect /user to UserRoute
app.use("/user", UserRoute);


app.use((err:Error, req:Request, res: Response, next: NextFunction)=>{

})

mongoose.connect(connectionString 
).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server Connected");
    });
}).catch((err: mongoose.CallbackError) => {
    console.error("Failed to connect to MongoDB", err);
});

