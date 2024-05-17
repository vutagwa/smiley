import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login';
import Register from './components/pages/register';
import LandingPage from './components/pages/landingPage';
import Smiley from './components/pages/smiley';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleRegister = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage onLogin={handleLogin} onRegister={handleRegister} />
          }
        />
        <Route
          exact
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route exact path="/smiley" element={<Smiley />} />
      </Routes>
    </Router>
  );
};

export default App;
