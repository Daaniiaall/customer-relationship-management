import { useState } from "react"
import { useRouter } from "next/router"
import Form from "../modules/Form"

function AddCustomerPage() {

  const router = useRouter()

  const [form , setForm] = useState({
    name: "",
    lastName: "" ,
    email: "",
    phone: "",
    city: "",
    postalCode: "",
    date: "",
    products: [],
  })

  const saveHandler = async () => {
    const res = await fetch("api/customer" , {
      method: "POST",
      body: JSON.stringify({data:form}),
      headers: {"Content-Type" : "application/json"}
    })

    const data = await res.json()
    // console.log(data)

    if(data.status === "success"){
      router.push("/")
    }
  }

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "" ,
      email: "",
      phone: "",
      city: "",
      postalCode: "",
      date: "",
      products: [],
    })
    router.push("/")
  }

  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
      <Form form={form} setForm={setForm}/>
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>Cancel</button>
        <button className="second" onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default AddCustomerPage