import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req , res){
   
    // connect to DB
    try {
        await connectDB();
    } catch (error) {
        console.log(error)
        res.status(500).json({status:"failed" , message:"Error in connecting to DB"})
    }
    // connect to DB

    const id = req.query.customerId
    const data = req.body.data

    // updating data in DB
    if(req.method === "PATCH"){
        try {
            const customer = await Customer.findById(id)

            customer.name = data.name
            customer.lastName = data.lastName
            customer.email = data.email
            customer.phone = data.phone
            customer.city = data.city
            customer.postalCode = data.postalCode
            customer.date = data.date
            customer.products = data.products
            customer.updatedAt = Date.now()

            await customer.save()

            res.status(200).json({status: "success" , data: customer})
        } catch (error) {
            console.log(error)
            res.status(500).json({status:"failed" , message:"Error in updating data in DB"})
        }
    }
    // updating data in DB

}