import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'



const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div>
      {line_items}
      <div style={{
        background: `linear-gradient(#141E30 0, #243B55 100%)`, color:`white`, 
        padding:10,
        borderRadius:`0 0 10px 10px`}}>

      <h2>Total: ${checkout.totalPrice}</h2>
      
      <button 
      onClick={handleCheckout}
      style={{
        border: `1px solid black`,
        borderRadius: 5,
        background:`white`,
        color: `black`,
        padding: 10,
        fontSize: `1rem`,
          fontWeight: 300,
          fontFamily: `Montserrat`,
          textAlign: `center`
      }}>Check out</button>
      </div>
    </div>
  )
}

export default Cart
