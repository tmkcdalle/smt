import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import FirstProd from "./Pages/ProductPages/FirstProd";
import "./App.css";
import Home from "./Pages/Home";
import Address from "./Pages/Address";
import Checkout from "./Pages/Checkout";
import "./tw.css";
import Payment from "./Pages/Payment";
import ThirdProd from "./Pages/ProductPages/ThirdProd";
import fourth from "./Pages/ProductPages/fourth";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prod1" element={<FirstProd />} />
          <Route path="/prod3" element={<ThirdProd />} />
          <Route path="/prod4" element={<fourth />} />

          <Route path="/address" element={<Address />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
