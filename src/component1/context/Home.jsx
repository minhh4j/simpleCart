import React, { useContext, useState }  from 'react'
import { TheCondext } from './Context'
import { NavLink } from 'react-router-dom'

function Home() {
 const [text,setText] = useState("")
 const {handlebutton , handleCart} = useContext(TheCondext)
  return (
    <div>
        <h4>Home</h4>
    <input type="text" placeholder='Enter a text' onChange={(event) => setText(event.target.value)} />
   <NavLink to={`/cartlist`}> <h4>Cart</h4> </NavLink>
    <button onClick={()=> handlebutton({text})}>+</button>
  </div>
  )
}

export default Home