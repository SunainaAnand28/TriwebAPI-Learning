import express from "express";

import { startExam, submitExam } from "../controllers/exam";
import { isAuthenticated } from "../middlewares/isAuth";


const router = express.Router();

//GET /exam/quizId
router.get("/:quizId", isAuthenticated, startExam);

// POST /exam
router.post("/", isAuthenticated, submitExam);


export default router;