import React, { useState } from 'react';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/Navbar';
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;1,100;1,200;1,400&family=Lora:ital,wght@0,400;0,600;1,500&family=Playfair+Display&display=swap');
</style>

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const productCount = 3;

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
    <NavBar onSearchChange={handleSearchChange} productCount={productCount} />
    <Banner />
    <Product searchTerm={searchTerm} />
    <Footer />
  </div>
  );
}

export default App;
