import express from "express";

import {createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz} from "../controllers/quiz"
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

//create 
// POST /quiz/
router.post("/", isAuthenticated, createQuiz);

// get 
// GET /quiz/:id
router.get("/:quizId", isAuthenticated, getQuiz);

// Update
// PUT /quiz
router.get("/" , isAuthenticated,updateQuiz);

// delete
//DELETE quiz/:quizId
router.delete("/:quizId", isAuthenticated,deleteQuiz);

//publish
// PATCH quiz/:quizId
router.patch("/publish", isAuthenticated, publishQuiz);


export default router;