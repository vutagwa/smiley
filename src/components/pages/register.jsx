import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onRegister(username);
  };

  return (
    <div className="login-container">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">Register</button>
    </form>
  </div>
);
};


export default Register;
