import BikeInfo from "../models/bikeinfo.model.js";
import { ApiError } from "../utils/apierror.js";
import {ApiResponse} from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const addBikeInfo = asyncHandler(async(req, res)=>{
    const {brand, bikeName, category} = req.body;

    if(!brand || !bikeName || !category){
        throw new ApiError(400, "All fields are required")
    }

    const bike = new BikeInfo({
        brand,
        bikeName,
        category
    })

    await bike.save();

    return res
    .status(200)
    .json(new ApiResponse(201, bike, "Info added successfuly"))

})

export {addBikeInfo}