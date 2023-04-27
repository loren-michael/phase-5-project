import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import StoresContainer from './components/StoresContainer';
import Store from './components/Store';
import Cart from './components/Cart';
import ItemsContainer from './components/ItemsContainer';
import ItemDetails from './components/ItemDetails';
import Profile from './components/Profile';
import NavBar from './components/NavBar'
import SignUp from './components/SignUp';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { createSession } from './actions/sessions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => dispatch(createSession(user)))
      }
    })
  }, [])


  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <Login /> } />
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
