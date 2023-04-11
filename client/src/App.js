import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';
import StoresContainer from './components/StoresContainer';
import Store from './components/Store';
import Cart from './components/Cart';
import ItemsContainer from './components/ItemsContainer';
import ItemDetails from './components/ItemDetails';
import Profile from './components/Profile';
import NavBar from './components/NavBar'

function App() {
  const items = useSelector(state => state.items.items)

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
          <Route exact path="/" element={ <Home /> }/>
          <Route path="/stores" element={ <StoresContainer /> } />
          <Route path="/stores/:id" element={ <Store /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/items" element={ <ItemsContainer /> } />
          <Route path="/items/:id" element={ <ItemDetails /> } />
          <Route path="/user" element={ <Profile /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
