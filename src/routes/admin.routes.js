import express from "express";
import { addBikeInfo, deleteBikeInfo, getAllBikeInfo, updateBikeInfo } from "../controllers/admin.controller.js";

const router = express.Router()

router.post("/add", addBikeInfo);

router.put("/update/:id", updateBikeInfo);

router.delete("/delete/:id", deleteBikeInfo);

router.get("/getall", getAllBikeInfo);

export default router;