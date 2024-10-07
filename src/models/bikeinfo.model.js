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
        enum: ['Sport', 'Scooter', 'Street']
    }
},{timestamps: true})
const Bikeinfo = mongoose.model("BikeInfo", bikeSchema);
export default Bikeinfo;