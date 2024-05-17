import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    const validUsername = 'Meriel';
    const validPassword = 'pass123';
  
    if (username === validUsername && password === validPassword) {
      history.push('/chat');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Smiley</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username or Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
