import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im';
const HouseList = () => {
  const {houses,loading}= useContext(HouseContext);
  console.log(houses);
  return <section className='mb-20'  >
<div className='container mx-auto'>
  <div className='grid md:grid-cols-2 lg:grid-cols-3'>
  {houses.map((house,index)=>{
    return (
      <Link to ={`/property/${house.id}`} key={index}>
        <House house ={house}/>
      </Link>
    )
  })}
  </div>
</div>
  </section> 
};

export default HouseList;
