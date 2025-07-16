import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

const getInitialAllowedUsers = () => {
  const storedUsers = sessionStorage.getItem('allowedUsers');
  return storedUsers ? JSON.parse(storedUsers) : [{ username: "test@gmail.com", password: "pass" }];
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [allowedUsers, setAllowedUsers] = useState(getInitialAllowedUsers);

  useEffect(() => {
    sessionStorage.setItem('allowedUsers', JSON.stringify(allowedUsers));
  }, [allowedUsers]);

  const login = (username, password) => {
    const foundUser = allowedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setIsAuthenticated(true);
      setUser({ username });
      return true;
    } else {
      setIsAuthenticated(false);
      setUser(null);
      return false;
    }
  };

  const addAllowedUser = (username, password) => {
    if (!allowedUsers.some(u => u.username === username)) {
      setAllowedUsers((prevUsers) => [...prevUsers, { username, password }]);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, addAllowedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
