import connectDB from "./database/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";


dotenv.config()


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server is running at Port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection Failed!!!", error);
})