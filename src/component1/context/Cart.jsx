import React, { useContext } from 'react'
import { TheCondext } from './Context'

function Cart() {
    const {data} =useContext(TheCondext)
  return (
    <div>
      <h1>Cart</h1>
     {data.map((item , index) => (
        <ul key={index}>
            <li>{item.text}</li>
        </ul>
     ))}
    </div>
  )
}

export default Cart