import React from 'react';
import Login from './login';
import Register from './register';

const LandingPage = ({ onLogin, onRegister }) => {
  return (
    <div>
      <Login onLogin={onLogin} />
      <Register onRegister={onRegister} />
    </div>
  );
};

export default LandingPage;
