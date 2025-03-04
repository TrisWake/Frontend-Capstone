import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home"
import Signup from "./components/SignUp/SignUp"
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FlightSearch from './components/Travel/Travel';
import TravelList from './components/Travel/TravelList';

function MainRouter({user, handleUserLogin, handleUserLogout}) { //Router is the parent, Routes will wrap all components
    return (
        <Router>
          <Nav user={user} handleUserLogout={handleUserLogout}/>
          <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={user ? <Navigate to ='/'/> : <Login handleUserLogin = {handleUserLogin}/>}/>
            <Route path='/travel' element={
              <PrivateRoute>
              <FlightSearch/>
            </PrivateRoute>}/>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightSearch />}
        />
        <Route path="/flight/results" element={<TravelList />}
        />
      </Routes>
        </Router>
    )
  }

export default MainRouter