import React, { createContext, useEffect, useState } from 'react';

// Create a new context
const ProfileContext = createContext();

// Create a provider component
const ProfileProvider = ({ children }) => {

  const [data, setData] = useState({educationNumber:0,certificateNumber:0}); // Set the initial theme

  const updateData = async (component) => {
   const name = Object.keys(component);
   const value = component[name[0]];
    await setData((prevDetails) => ({
        ...prevDetails,
        [name]: value,
    }));
  };

  // useEffect(() => {
  //   console.log('Data:', data);
  // }, [data]);

  // Provide the theme and toggleTheme function to the children components
  return (
    <ProfileContext.Provider value={{ data, updateData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
