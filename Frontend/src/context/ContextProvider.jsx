import React, { createContext } from "react";


export const Context = createContext();


export const ContextProvider = ({ children }) => {


  const fetchUserDetails = () => {
    console.log("✔️ User details fetched");
  };

  const fetchUserAddToCart = () => {
    console.log("✔️ Cart data fetched");
  };

  return (
    <Context.Provider value={{ fetchUserDetails, fetchUserAddToCart }}>
      {children}
    </Context.Provider>
  );
};