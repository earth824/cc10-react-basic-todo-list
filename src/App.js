import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AuthContextProvider from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <div className="container">
        <div className="mt-5 mx-auto mw-xs">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
