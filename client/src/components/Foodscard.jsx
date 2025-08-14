import React from 'react'
import { Card } from 'react-bootstrap'

const Foodscard = ({foods}) => {

  return <>
    <Card className='mt-3'>
    <Card.Img src={foods.image} variant='top'/>
    <Card.Body>
         <Card.Title>Foods:{foods.name}</Card.Title>
        <Card.Text>Quantity:{foods.Quantity}</Card.Text>
        <Card.Text>Price:{foods.Price}</Card.Text>
        <Card.Text>Discounted Price:{foods.DiscountedPrice}</Card.Text>
    </Card.Body>

    </Card>
  </>
}

export default Foodscard