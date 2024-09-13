import express from "express";
import {getBikeInfo} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:brand/:bikeName", getBikeInfo)

export default router;