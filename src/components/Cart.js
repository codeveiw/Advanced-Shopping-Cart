import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItem from "../data/storeItem.json"
import formatCurrency from './formatCurrency'
import { useShoppingCart } from '../Context/shoppingCartContext'

const Cart = ({id,quantity}) => {
    const {removeItemFormCart}=useShoppingCart()
    const item = storeItem.find((item)=>(item.id===id))
    if(item==null)return null
  return (
   <Stack direction='horizontal' gap={2} className='d-flex align-items-center '>
    <img src={item.imgUrl} alt='cart-img' style={{width:'125px',height:"75px",objectFit:'cover'}}/>
      <div className='me-auto'>
    <div>
        {item.name} {" "}
        {quantity>1 && <span className='text-muted' style={{fontSize:'0.65rem'}}>x{quantity}</span>}
         <div className="text-muted" style={{fontSize:"0.75rem"}}>{formatCurrency(item.price)}</div>
    </div>


   </div>
      <div>{formatCurrency(item.price * quantity)}</div>
  <Button variant="outline-danger" size='sm' onClick={()=>removeItemFormCart(id)}>&times;</Button>
   </Stack>
  )
 
}

export default Cart
