import express from "express";
import { addBikeInfo } from "../controllers/admin.controller";

const router = express.Router()

router.post("/", addBikeInfo)

export default router;