import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage when the component mounts
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updateUser = (newUserData) => {
    // Update user data and save it to local storage
    setUser(newUserData);
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
