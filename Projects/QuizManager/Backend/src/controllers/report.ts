import Report from "../models/report";
import ProjectError from "../helper/error";

import { RequestHandler } from "express";
import { ReturnResponse } from "../utils/interfaces";

// const getReport: RequestHandler = async (req: Request, res: Response, next: NextFunction)
const getReport: RequestHandler = async (req, res, next) => {

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