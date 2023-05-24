import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemsContainer from './components/ItemsContainer';
import ItemDetails from './components/ItemDetails';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { loadSession } from './actions/sessions';
import 'semantic-ui-css/semantic.min.css';
import { loadItems } from './actions/items';
import CheckOut from './components/CheckOut';
import ItemForm from './components/ItemForm';
import ItemEdit from './components/ItemEdit';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems())
    dispatch(loadSession())
  }, [])

  return (
    <BrowserRouter>
      <div id="background-color">
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/items" element={ <ItemsContainer /> } />
          <Route path="/items/:id" element={ <ItemDetails /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/new_item" element={ <ItemForm /> } />
          <Route path="/checkout/:id" element={ <CheckOut /> } />
          <Route path="/edit" element={ <ItemEdit /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
