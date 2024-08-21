import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req , res) {
    // connect to DB
    try {
        await connectDB()
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"failed" , message:"Error in connecting to DB"})
    }
    // connect to DB

    if(req.method === "POST"){

        const data = req.body.data;
        
        // validation
        if(!data.name || !data.lastName || !data.email) {
            return res.status(400).json({status: "failed" , message:"invalid Data"})
        }
        // validation
        

        // save in DB
        try {
            const customer = await Customer.create(data)
            res.status(201).json({status:"success" , message:"Data created" , data:customer})
        } catch (error) {
            console.log(error)
            res.status(500).json({status:"failed" , message:"Error in storing data in DB"})
        }
        // save in DB

    }
}