// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import AdminPanel from "./pages/AdminPanel";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Signup from "./pages/SignUp";
// import { ToastContainer } from 'react-toastify';
// import AllUsers from './pages/AllUsers';
// import AllProducts from './pages/AllProducts';
// import CategoryPassword from './pages/CategoryPassword'; 
// import Cart from './pages/Cart';
// import ProductDetails from './pages/ProductDetails';
// import SearchProduct from './pages/SearchProduct';

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/sign-up" element={<Signup />} />

//             {/* Admin Panel with nested routes */}
//             <Route path="/admin-panel" element={<AdminPanel />}>
//               <Route index element={<div className='p-4'>Welcome to Admin Panel</div>} />
//               <Route path="all-users" element={<AllUsers />} />
//               <Route path="all-products" element={<AllProducts />} />
//             </Route>

//             <Route path="/product-category" element={<CategoryPassword />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/product-details/:id" element={<ProductDetails />} />
//             <Route path="/search-product" element={<SearchProduct />} />
//           </Routes>
//         </main>
//         <Footer />
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// };

// export default App;








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
import CategoryPassword from './pages/CategoryPassword'; 
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import SearchProduct from './pages/SearchProduct';

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
             <Route path="/product-category" element={<CategoryPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/search-product" element={<SearchProduct />} />

          

          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
