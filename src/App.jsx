import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/login';
import Smiley from './components/pages/smiley';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={LoginPage} />
        <Route exact path="/Smiley" element={<Smiley />} /> 
      </Routes>
    </Router>
  );
}

export default App;
