import FormInput from "./FormInput"
import ItemList from "./ItemList"

function Form({form , setForm}) {
    const changeHandler = (e) => {
        setForm({...form , [e.target.name]:e.target.value })
    }
  return (
    <div>
        <FormInput type="text" name="name" lable="Name" value={form.name}  onChange={changeHandler} />
        <FormInput type="text" name="lastName" lable="LastName" value={form.lastName}  onChange={changeHandler} />
        <FormInput type="email" name="email" lable="Email" value={form.email}  onChange={changeHandler} />
        <FormInput type="text" name="phone" lable="Phone" value={form.phone}  onChange={changeHandler} />
        <FormInput type="text" name="city" lable="city" value={form.city}  onChange={changeHandler} />
        <FormInput type="text" name="postalCode" lable="Postal Code" value={form.postalCode}  onChange={changeHandler} />
        <FormInput type="date" name="date" lable="Date" value={form.date}  onChange={changeHandler} />
        
        <ItemList form={form} setForm={setForm} />
    </div>
  )
}

export default Form