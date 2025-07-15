import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaUser } from "react-icons/fa";
import Signup from "./pages/SignUp"; // Uncomment if you have this file
import { ToastContainer } from 'react-toastify';
import AllUsers from './pages/AllUsers';
import AllProducts from './pages/AllProducts';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/all-users" element={<AllUsers/>}/>
            <Route path="/all-product" element={<AllProducts />} />
          

          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
