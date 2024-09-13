import BikeInfo from "../models/bikeinfo.model.js";
import { ApiError } from "../utils/apierror.js";
import {ApiResponse} from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getBikeInfo = asyncHandler(async(req, res)=>{
    const {brand, bikeName} = req.params

    if(!brand || !bikeName){
        throw new ApiError(404, "BikeInfo not found")
    }

    const getBike = await BikeInfo.findOne({brand, bikeName})

    if(!getBike){
        throw new ApiError(404, "BikeId not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, getBike, "Bike data fetch successfully"))
})

export {getBikeInfo}