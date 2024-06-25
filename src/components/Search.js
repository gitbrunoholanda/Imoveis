import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PrinceRangerDropdown from './PriceRangeDropdown';

import { HouseContext } from './HouseContext';

//icons
import {RiSearch2Line} from 'react-icons/ri';
const Search = () => {
 // const[houses]=useContext(HouseContext);
 // console.log(houses);
 const{handleClick}= useContext(HouseContext);
  return (

    <div className='px-[3000] py6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop:-blur rounded-lg'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PrinceRangerDropdown/>
      <button  onClick ={() => handleClick()}className=' bg-cyan-700 hover :bg-cyan-800 transition w-full lg: max-w-[162px] rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line/>
      </button>
      
      
      </div>
  );
  
  
  
 
};

export default Search;
