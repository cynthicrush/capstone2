import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import "bootswatch/dist/united/bootstrap.min.css"

import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContext from './auth/UserContext';
import Homepage from './Homepage';
import SignupForm from './auth/SignupForm';
import LoginForm from './auth/LoginForm';
import JensKitchenApi from './Api';
import LocalStorage from './helpers/LocalStorage';

export const TOKEN_STORAGE_ID = 'jens-token'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = LocalStorage(TOKEN_STORAGE_ID)

  function logout() {
    setCurrentUser(null)
  }

  async function signup(data) {
    try{
      let token = await JensKitchenApi.signup(data)
      setToken(token)
      return{success: true}
    } catch(errors) {
      console.error('Sign Up failed', errors)
      return {success: false, errors}
    }
  }

  async function login(data) {
    try{
      let token = await JensKitchenApi.login(data)
      setToken(token)
      return{success: true}
    } catch(errors) {
      console.error('Login failed', errors)
      return {success: false, errors}
    }
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser}}>
        <div className='App'>
          <NavBar logout={logout}/>
          <div className='pt-5'>
            <Routes>
              <Route exact path='/' element={<Homepage />}/>
              <Route exact path='/signup' element={<SignupForm signup={signup}/>}/>
              <Route exact path='/login' element={<LoginForm login={login}/>}/>
            </Routes>
          </div>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
