import React from 'react'
import Foodsdata from '../data/data'
import Foodscard from './Foodscard'
import Foodslider from './Foodslider'

const Home = () => {

  return <>
  <div className='row'>
    {
      Foodsdata.map(x=>(
        <div className='col-md-3'>
         <Foodscard foods={x}/>
        </div>
      ))
    }
  </div>
  <div className='container-fluid mt-3'>
    <h2>Waste Foods Management System Data</h2>
    <Foodslider foods={Foodsdata}/>
  </div>

  </>
}

export default Home