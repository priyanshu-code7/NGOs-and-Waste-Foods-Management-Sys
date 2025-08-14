import React from 'react'
import { Carousel,Card } from 'react-bootstrap'

const Foodslider = ({foods}) => {

  return <>
    <Carousel>
        {foods.map((x,index)=>(
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={x.image}
                    alt={x.name}
                    width={1450}
                    height={650}
                />
                <Carousel.Caption>
                    <Card bg='dark' text='white'>
                        <Card.Title>{x.name}</Card.Title>
                        <Card.Text>Discounted Price:{x.DiscountedPrice}</Card.Text>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  </>
}

export default Foodslider