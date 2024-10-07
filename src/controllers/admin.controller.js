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

const updateBikeInfo = asyncHandler(async(req, res)=> {
    const {brand, bikeName, category} = req.body;

    const {id} = req.params;

    const updateFields = {};

    if (brand !== undefined) {
        updateFields.brand = brand;
    }
    if (bikeName !== undefined) {
        updateFields.bikeName = bikeName;
    }
    if (category !== undefined) {
        updateFields.category = category;
    }

    if(Object.keys(updateFields).length === 0){
        throw new ApiError(400, "Please Provide atleast one field to update")
    }

    const updateBike = await BikeInfo.findByIdAndUpdate(id, updateFields,
        {new: true}
    )

    if(!updateBike){
        throw new ApiError(404, "Bike not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, updateBike, "Bike info updated"))
})

const deleteBikeInfo = asyncHandler(async(req, res)=>{

    const {id} = req.params;

    const deleteBike = await BikeInfo.findByIdAndDelete(id);

    if(!deleteBike){
        throw new ApiError(404, "Bike not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, "Bike Info deleted successfully"))
})

const getAllBikeInfo = asyncHandler(async(req, res)=>{
    const bikes = await BikeInfo.find({});

    return res
    .status(200)
    .json(new ApiResponse(200, bikes, "Bike Info retrieved"))
})

export {
    addBikeInfo,
    updateBikeInfo,
    deleteBikeInfo,
    getAllBikeInfo
}