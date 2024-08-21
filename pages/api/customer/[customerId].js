import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req , res) {

      // connect to DB
      try {
        await connectDB();
    } catch (error) {
        console.log(error)
        res.status(500).json({status:"failed" , message:"Error in connecting to DB"})
    }
    // connect to DB

    const id = req.query.customerId

    // fetch data from DB
    if(req.method === "GET") {
        try {
            const customer = await Customer.findOne({_id:id})
            res.status(200).json({status : "success" , data: customer})

        } catch (error) {
            console.log(error)
            res.status(500).json({status:"failed" , message:"Error in retriving data from DB"})
        }
    }
    // fetch data from DB

}