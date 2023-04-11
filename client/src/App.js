import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import NavBar from './components/NavBar'

function App() {
  const items = useSelector(state => state.items)

  // useEffect(()=>{
  //   fetch('/items').then(r => {
  //     if (r.ok) {
  //       r.json().then()
  //     }
  //   })
  // }, [])

  return (
    <BrowserRouter>
      <div>
        <NavBar items={items}  />
        <Routes>
          <Route exact path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
