import React, { useState } from 'react';
import Product from './component/Product/Product';
import Footer from './component/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Banner from './component/Banner/Banner';
import NavBar from './component/NavBar/Navbar';
// import ListProduct from './component/listProduct/listproduct';
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;1,100;1,200;1,400&family=Lora:ital,wght@0,400;0,600;1,500&family=Playfair+Display&display=swap');
</style>

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(0); 

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const addToCart = (quantity: number) => {
    // Update the cart count when adding items to the cart
    setCartCount((prevCount) => prevCount + quantity);
  };

  return (
    <div className="App">
      <NavBar onSearchChange={handleSearchChange} productCount={cartCount} />
      <Banner />
      <Product searchTerm={searchTerm} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
