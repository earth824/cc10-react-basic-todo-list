import { useContext, useState } from 'react';
import axios from '../config/axios';
import { AuthContext } from '../contexts/AuthContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);

  const handleSubmitLogin = e => {
    e.preventDefault();
    axios
      .post('/auth/login', { username, password })
      .then(res => {
        login(res.data.token);
      })
      .catch(err => {
        console.log(err);
        setError('Invalid username or password.');
        setTimeout(() => setError(''), 5000);
      });
  };

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmitLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
