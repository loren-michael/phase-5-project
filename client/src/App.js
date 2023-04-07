import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'

function App() {


  return (
    <BrowserRouter>
      <div>
        <NavBar  />
        <Routes>
          <Route exact path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
