import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      {/* <h1>Hello, world!</h1> */}
        <Navbar />
        <Routes>
          {/* should be the home component */}
          <Route path='/' exact />
        </Routes>
    </Router>
    </>
  );
}

export default App;
