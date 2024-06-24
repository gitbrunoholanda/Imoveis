import React, { useState, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowDropUpLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const princes = [
    { value: 'Price range (any)' },
    { value: 'Price range 1000000 - 1300000' },
    { value: 'Price range 1300000 - 1600000' },
    { value: 'Price range 1600000 - 1900000' },
    { value: 'Price range 1900000 - 2200000' },
    { value: 'Price range 100000 - 300000' },
    { value: 'Price range 300000 - 400000' },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className={'dropdown-btn w-full text-left'}>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {price}
          </div>
          <div className='text-[13px]'>Choose price range.</div>
          {isOpen ? (
            <RiArrowDropUpLine className='drop-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='drop-icon-secondary' />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className={'dropdown-menu'}>
        {princes.map((prince, index) => (
          <Menu.Item
            onClick={() => setPrice(prince.value)}
            className='cursor-pointer hover:text-cyan-400 transition'
            as='li'
            key={index}
          >
            {prince.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
