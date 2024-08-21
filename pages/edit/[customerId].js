import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomerEditPage from "@/components/templates/CustomerEditPage";

function Index() {
  const [data, setData] = useState(null);

  const router = useRouter();
  const { query, isReady } = router;
  const id = query.customerId;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${id}`)
        .then((res)=> res.json())
        .then((data)=> setData(data.data));
    }
  }, [isReady]);

  if (data) return <CustomerEditPage data={data} id={id} />;
}

export default Index;
