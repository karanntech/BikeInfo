import BikeInfo from "../models/bikeinfo.model.js";
import { ApiError } from "../utils/apierror.js";
import {ApiResponse} from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getBikeInfo = asyncHandler(async(req, res)=>{
    const bikeData = await BikeInfo.find({})
    return res
    .status(200)
    .json(new ApiResponse(200, bikeData, "Bike data fetch successfully"))
})

const getBikeByCategory = asyncHandler(async(req, res)=>{

    const {category} = req.params;

    if(!category){
        throw new ApiError(400, "Invalid Category")
    }

    const bikes = await BikeInfo.find({category})

    if(bikes.length === 0){
        return res
        .status(404)
        .json(new ApiResponse(404, "No bikes found in this category"))
    }

    return res
    .status(200)
    .json(new ApiResponse(200, bikes, `Bikes in ${category} retrieve successfully`))
})

export {
    getBikeInfo,
    getBikeByCategory
}