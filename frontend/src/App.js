import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import "bootswatch/dist/united/bootstrap.min.css"

import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwt from 'jsonwebtoken'
import UserContext from './auth/UserContext';
// import Header from './components/header'
import Footer from './components/footer'
import Homepage from './Homepage';
import SignupForm from './auth/SignupForm';
import LoginForm from './auth/LoginForm';
import DishPage from './dishes/DishPage';
import DishDetail from './dishes/DishDetail';
import JensKitchenApi from './Api';
import LocalStorage from './helpers/LocalStorage';

export const TOKEN_STORAGE_ID = 'jens-token'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = LocalStorage(TOKEN_STORAGE_ID)
  const [orderIds, setOrderIds] = useState(new Set([]))

  useEffect(function loadCurrentUserInfo() {
    async function getCurrentUser() {
      if(token) {
        try{
          let {username} = jwt.decode(token)
          JensKitchenApi.token = token
          let currentUser = await JensKitchenApi.getCurrentUser(username)
          setCurrentUser(currentUser)
        } catch(error) {
          setCurrentUser(null)
        }
      }
    }
    getCurrentUser()
  }, [token])

  function logout() {
    setCurrentUser(null)
    setToken(null)
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

  function hasOrdered(id) {
    return orderIds.has(id)
  }

  function orderDish(id) {
    if(hasOrdered(id)) return
    JensKitchenApi.orderDish(currentUser.username, id)
    setOrderIds(new Set([...orderIds, id]))
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser, hasOrdered, orderDish}}>
        <div className='App'>
          <NavBar logout={logout}/>
          <div className='pt-5'>
            <Routes>
              <Route exact path='/' element={<Homepage />}/>
            </Routes>
            <main id='main'>
              <Routes>
                <Route exact path='/signup' element={<SignupForm signup={signup}/>}/>
                <Route exact path='/login' element={<LoginForm login={login}/>}/>
                <Route exact path='/dishes' element={<DishPage />}/>
                <Route exact path='/dishes/:id' element={<DishDetail />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
