import React, { createContext, useEffect, useState } from 'react';

// Create a new context
const FormSubmitToggleContext = createContext();

// Create a provider component
const FormSubmitToggleProvider = ({ children }) => {

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const toggleSubmitStatus = () => {
    setIsSubmitted(!isSubmitted);
  };


  // useEffect(() => {
  //   console.log('Data:', data);
  // }, [data]);

  // Provide the theme and toggleTheme function to the children components
  return (
    <FormSubmitToggleContext.Provider value={{ isSubmitted, toggleSubmitStatus }}>
      {children}
    </FormSubmitToggleContext.Provider>
  );
};

export { FormSubmitToggleContext, FormSubmitToggleProvider };
