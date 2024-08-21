import FormInput from "./FormInput"

function ItemList({form , setForm}) {

    const {products} = form

    const addHandler = () => {
        setForm({...form , products: [...products , {name: "" , price : "" , quantity: ""}] })
        console.log(products)
    }

    const changeHandler = (e ,index) => {
        const {name , value} = e.target
        const newProducts = [...products]
        newProducts[index][name] = value
        setForm({...form , products: newProducts })
    }

    const deleteHandler = (index) => {
        const newProducts = [...products]
        newProducts.splice(index , 1)
        setForm({...form , products: newProducts })
    }

  return (
    <div className="item-list">
        <h4>Purchased Products</h4>

        {products.map((product , index) => (
            <div key={index} className="form-input__list">

                <FormInput type="text" name="name" lable="Product Name" value={product.name} onChange={(e) => changeHandler(e , index)} />

                <div>
                    <FormInput type="text" name="price" lable="price" value={product.price} onChange={(e) => changeHandler(e , index)} />
                    <FormInput type="number" name="quantity" lable="quantity" value={product.quantity} onChange={(e) => changeHandler(e , index)} />
                </div>

                <button onClick={(e) => deleteHandler(index)}>Remove Item</button>
            </div>
        ))}
        <button onClick={addHandler}>Add Item</button>
    </div>
  )
}

export default ItemList