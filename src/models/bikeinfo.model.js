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
const bikeinfo = mongoose.model("BikeInfo", bikeSchema);
export default bikeinfo