import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TheCondext =createContext()
function Context({children}) {

  const [data,setData] = useState([])
  console.log(data)
  const navigate = useNavigate()

const handlebutton = (x)=> {
 setData([...data , x ])

}

const handleCart = ()=> {
  navigate("/cartlist")
}

  return (
  <TheCondext.Provider value={{handlebutton , data ,handleCart}}>
  {children}
  </TheCondext.Provider>
  )
}

export default Context