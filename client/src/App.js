import React from 'react';
// import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar'

function App() {

  const items = useSelector(store => store.itemsReducer.items)


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
