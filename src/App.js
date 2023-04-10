import React from "react";
import NavScrollExample from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register";
import RegisterSuccess from "./components/Auth/RegisterSuccess";
import Login from "./components/Auth/Login";
import ProductList from "./components/Product/ProductList";

const App = () => {
  return (
    <div>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-succses" element={<RegisterSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />

        <Route path="/*" element={<h1>NOT FOUN PAGE</h1>} />
      </Routes>
    </div>
  );
};

export default App;
