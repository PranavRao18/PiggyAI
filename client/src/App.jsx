// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
