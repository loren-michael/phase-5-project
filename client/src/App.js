import React from 'react';
// import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar'

function App() {

  const items = useSelector(store => store.itemsReducer.items)


  return (
    <BrowserRouter>
      <div>
        <NavBar  />
        <Switch> 
          <Route exact path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
