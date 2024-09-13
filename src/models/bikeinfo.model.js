import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: String
    },
    bikeName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model("BikeInfo", bikeSchema)