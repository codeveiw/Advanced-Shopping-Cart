import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../Context/shoppingCartContext'
import Cart from './Cart'
import formatCurrency from './formatCurrency'
import storeItem from "../data/storeItem.json"

const ShoppingCart = ({isOpen}) => {
    const {cartItems,closeCart} =useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart}  placement="end">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
       <Stack gap={3}>
         {cartItems.map((item)=>(
            <Cart key={item.id} {...item}/>
        ))}
       <div className='ms-auto fw-bold fs-5'>
        Total{" "}
         {formatCurrency(
            cartItems.reduce((total,cartItems)=>{
                const item = storeItem.find((item)=>item.id === cartItems.id)
                return total+ (item?.price || 0)*cartItems.quantity
            },0)
        )}
       </div>
       </Stack>
    </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart
