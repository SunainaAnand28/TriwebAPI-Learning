import Report from "../models/report";
import ProjectError from "../helper/error";

import { Request, Response, NextFunction } from "express";


interface ReturnResponse {
    status: "success" | "error";
    message: string,
    data: {}
}

const getReport = async (req: Request, res: Response, next: NextFunction) => {

    try {

        let report;
        if (!!req.params.reportId) {

            const reportId = req.params.reportId;
            report = await Report.findById(reportId);

            if (!report) {
                const err = new ProjectError("No Report found!");
                err.statusCode = 404;
                throw err;
            }

            if (report.userId.toString() !== req.userId) {
                const err = new ProjectError("You are not allowed");
                err.statusCode = 405;
                throw err;
            }

        } else {
            report = await Report.find({ userId: req.userId });
        }
        
        const resp: ReturnResponse = { status: "success", message: "Report", data: report };
        res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}


export { getReport };