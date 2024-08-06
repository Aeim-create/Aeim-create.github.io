import { useState, useRef } from 'react'
import accessoryData from './accessory.json'

function App() {

  const quantityRef = useRef()
  const productRef = useRef()
  const handleInput = (e) => {
    const order = {
      productId: productRef.current.value,
      quantity: quantityRef.current.value
    }
    console.table(order)
  }
  // const handleInput=(e)=>{
  //   console.log(quantityRef.current.value)
  //   console.log(productRef.current.value)
  // }
console.table(accessoryData)

  return (
    <>

      Product: <select ref={productRef}>
        <option value1="p1">product1</option>
        <option value2="p2">product2</option>
        <option value3="p3">product3</option>
      </select>
      Quantity: <input type="number" ref={quantityRef} />
      <button onClick={handleInput}>Submit</button>
    </>
  )
}

export default App
