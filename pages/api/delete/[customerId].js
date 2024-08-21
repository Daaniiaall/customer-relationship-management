import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req , res) {
    
    // connect to DB
    try {
        await connectDB()
    } catch (error) {
        console.log(error)
        res.status(500).json({status:"failed" , message:"Error in connecting to DB"})
    }
    // connect to DB

    const id = req.query.customerId

    // delete data from DB
    if(req.method === "DELETE") {
        try {
            await Customer.findByIdAndDelete(id)
            res.status(200).json({status: "success" , message: "Data Deleted"})
        } catch (error) {
            console.log(error)
            res.status(500).json({status:"failed" , message:"Error in deleting Data from DB"})
        }
    }
    // delete data from DB

}