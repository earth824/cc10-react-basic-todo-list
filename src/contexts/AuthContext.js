import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // { id: 1, username: 'john', email: 'john@gmail.com' }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
