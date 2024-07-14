import React, { useState } from 'react'

import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [vat, setVat] = useState(0)
  const [total, setTotal] = useState(0)

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value))
  }

  const handleDiscountChange = (e) => {
    setDiscount(parseFloat(e.target.value))
    setVat((price - parseFloat(e.target.value)) * 0.07)
    setTotal(
      price -
        parseFloat(e.target.value) +
        (price - parseFloat(e.target.value)) * 0.07
    )
  }

  return (
    <div className='flex'>
      <h1 style={{ textAlign: 'center' }}>Vat Calculator</h1>
      <div>
        <div className='inputDiv'>
          <label htmlFor='price'>Price:</label>
          <input
            className='inputField'
            type='number'
            id='price'
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className='inputDiv'>
          <label htmlFor='discount'>Discount:</label>
          <input
            className='inputField'
            type='number'
            id='discount'
            value={discount}
            onChange={handleDiscountChange}
          />
        </div>
      </div>
      <div>
        <p>VAT: {vat ? vat.toFixed(2) : 0}</p>
        <p>Total: {total ? total : 0}</p>
      </div>
    </div>
  )
}

export default App
