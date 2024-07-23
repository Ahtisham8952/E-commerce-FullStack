import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const ConnectDB = async ()=> {

    try {
     const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log("connection sucess with DB");
        
    } catch (error) {
        console.log("this is DB error from Db folder",error);
        process.exit(1)
        
    }

}

export default ConnectDB