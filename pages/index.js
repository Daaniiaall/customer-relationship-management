import Card from "@/components/modules/Card";
import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default function Index({customers}) {

  return (
    <div>
      {
        customers.map((customer) => (
          <Card key={customer._id} customer={customer} />
        ))
      }
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find()

    return {
      props: {customers: JSON.parse(JSON.stringify(customers))}
    }

  } catch (error) {
    return {
      notFound: true
    }
  }
}
