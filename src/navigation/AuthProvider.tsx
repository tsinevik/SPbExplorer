import React, { createContext, useState } from 'react';
import { login, logout, register, reset } from 'api/auth-service';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        reset,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
