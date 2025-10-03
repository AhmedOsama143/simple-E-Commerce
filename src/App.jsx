import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Register from "./components/Register/Register";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(
    !!localStorage.getItem("user")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsRegistered(!!localStorage.getItem("user"));
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={isRegistered ? <Layout /> : <Navigate to="/register" />}
      >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
