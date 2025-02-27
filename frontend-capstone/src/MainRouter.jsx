import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home"
import Signup from "./components/SignUp/SignUp"
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

//private routes --> checking to make sure you are logged in
//passing props --> allows to pass credentials to app
//Navigating users away --> relocate them to login if not allowed


function MainRouter({user, handleUserLogin, handleUserLogout}) { //Router is the parent, Routes will wrap all components
    return (
        <Router>
          <Nav user={user} handleUserLogout={handleUserLogout}/>
          <Routes>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={user ? <Navigate to ='/movie'/> : <Login handleUserLogin = {handleUserLogin}/>}/>
            <Route path='/movie' element={
              <PrivateRoute>
              <Movie/>
            </PrivateRoute>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
    )
  }

export default MainRouter