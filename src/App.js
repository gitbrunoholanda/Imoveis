import React from 'react';
import { Routes, Route} from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import  PropertyDetails from './pages/PropertyDetails';
import Banner from './components/Banner';
import Search from './components/Search';

const App = () => {
  return (
    <div className="max-w[1440px] mx-auto bg-white">
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      
  
    </div>
  );
};

export default App;
