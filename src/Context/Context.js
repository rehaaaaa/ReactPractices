import React, { createContext } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const data = 'Hello from MyContextProvider!';

  return (
    <MyContext.Provider value={data}>
      {/* Render the child components using the children prop */}
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
export {MyContextProvider}