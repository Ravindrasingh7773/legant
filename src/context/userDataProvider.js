import React, { createContext, useEffect, useState } from "react";
 
const UserContext = createContext(null);

const UserDataProvider = ({ children }) => {  
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userDetails");
    return savedUser ? JSON.parse(savedUser) : [];
  });

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("user Details", JSON.stringify(user));
  }, [user]);

  const saveUserDetails = (newUserDetails) => { 
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
     
    const updatedUsers = [...savedUsers, newUserDetails];
     
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
   
 
  const signUpUser = (newUser) => {
    const userExists = user.some(
      (existingUser) => existingUser.email === newUser.email
    );

    if (!userExists) {
      setUser((prevUser) => [...prevUser, newUser]);
      setCurrentUser(newUser);
    } else {
      alert("User already exists.");
    }
  };

 
  const signInUser = (email, password) => {
    
    const savedUsers = localStorage.getItem("userDetails");
    const users = savedUsers ? JSON.parse(savedUsers) : [];
    // Renamed local variable to avoid shadowing the state variable `user`
    const foundUser = user.find(
      (existingUser) =>
        existingUser.email === email && existingUser.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    } else {
      alert("Invalid email or password.");
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{  
                signUpUser,
                signInUser,
                currentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserDataProvider };

 