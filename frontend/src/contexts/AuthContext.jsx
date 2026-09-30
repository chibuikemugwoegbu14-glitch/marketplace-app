import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

const getStoredUser = () => {
  try {
    const user = localStorage.getItem('marketplace-user');
    const token = localStorage.getItem('marketplace-token');
    return user && token ? { user: JSON.parse(user), token } : { user: null, token: null };
  } catch {
    return { user: null, token: null };
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser().user);
  const [token, setToken] = useState(getStoredUser().token);

  useEffect(() => {
    if (user && token) {
      localStorage.setItem('marketplace-user', JSON.stringify(user));
      localStorage.setItem('marketplace-token', token);
    } else {
      localStorage.removeItem('marketplace-user');
      localStorage.removeItem('marketplace-token');
    }
  }, [user, token]);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(user && token),
      login,
      logout,
    }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
