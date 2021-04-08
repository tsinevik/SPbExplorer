import React, { createContext, useState } from 'react';

export const StorageContext = createContext({});

export const StorageProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <StorageContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </StorageContext.Provider>
  );
};
