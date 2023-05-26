import React, { useEffect, useContext, useState } from "react";
import { Navbar } from "../navbar";
import APIService from "../APIService";
import { ShopContextProvider } from "../../context/shop-context";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import UserList from "./cart/UserList";
import { UserContext } from "./UserContext";

export const Contact = () => {
  const { user, updateUser } = useContext(UserContext); // Update variable name to "updateUser"
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = location.state?.data;
        if (data) {
          // Check if user data already exists in context
          if (!user || user.id !== data.id) {
            // If not, fetch the user data and update the context
            const response = await APIService.getUser(data.id);
            updateUser(response); // Update function name to "updateUser"
          }
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [location.state?.data, updateUser, user]); // Update function name to "updateUser"

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ShopContextProvider>
        <Navbar />
      </ShopContextProvider>
      <div className="col pad"></div>
      <div>
        <UserList users={user} />
      </div>
    </>
  );
};
