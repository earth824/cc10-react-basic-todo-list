import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import * as localStorageService from '../services/localStorage';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // { id: 1, username: 'john', email: 'john@gmail.com' }

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

  const login = token => {
    localStorageService.setToken(token);
    setUser(jwtDecode(token));
    navigate('/');
  };

  const logout = () => {
    localStorageService.removeToken();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
