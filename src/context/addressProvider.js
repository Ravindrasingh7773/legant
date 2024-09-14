import React, { createContext, useEffect, useState } from "react";

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState(() => {
    const savedAddress = localStorage.getItem("Address");
    return savedAddress ? JSON.parse(savedAddress) : [];
  });

  useEffect(() => {
    localStorage.setItem("Address", JSON.stringify(address));
  }, [address]);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressProvider };
