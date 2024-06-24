import React, { createContext, useState, useEffect } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  // houseData é onde fica a lista de descrição dos imóveis.

  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Localização");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Tipo de imóvel");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Valores de imóveis");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // Remover duplicatas
    const uniqueCountries = ["Localização (any)", ...new Set(allCountries)];

    // Definir estado dos países
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // Remover duplicatas
    const uniqueProperties = [
      "Tipo de imóvel (any)",
      ...new Set(allProperties),
    ];

    // Definir estado dos tipos de propriedade
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    console.log("clicked");
  };

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
