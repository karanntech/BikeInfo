import express from "express";
import {getBikeByCategory, getBikeInfo} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/getall", getBikeInfo);

router.get("/bikes/:category", getBikeByCategory);

export default router;