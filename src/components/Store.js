import React from 'react'
import{Col, Row} from "react-bootstrap"
import storeItem from '../data/storeItem.json'
import Item from './Item'
const Store = () => {
  return (
    <div >
      <h1 style={{marginLeft:"3.8rem"}}>Store</h1>
      <Row md={2} xs={1}lg={3}>
        {storeItem.map((item)=>(
          <Col key={item.id}>
            <Item {...item}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Store
