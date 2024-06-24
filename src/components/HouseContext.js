import React, { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  //houseData é onde fica a lista de descrição dos imoveis.
  
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Localização');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Tipo de imovel');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Valores de imoveis');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    console.log(allCountries);

    // Remover duplicatas
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // Definir estado dos países
    setCountries(uniqueCountries);
  }, []);
  const handleClick=()=>{
 console.log('clicked');
  }
  return (
    <HouseContext.Provider 
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        setLoading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
