import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home"
import Signup from "./components/SignUp/SignUp"
import Nav from './components/Nav/Nav'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import FlightSearch from './components/Travel/Travel'
import TravelList from './components/Travel/TravelList'
import Profile from './components/Profile/Profile'

function MainRouter({user, handleUserLogin, handleUserLogout}) {
  const [flightResults, setFlightResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSearch = (flights, error)=>{
    if(error){
      setErrorMessage(error)
      setFlightResults([])
    }else{
      setFlightResults(flights)
      setErrorMessage(null)
    }
  }
  return (
    <Router>
      <Nav user={user} handleUserLogout={handleUserLogout}/>
      <Routes>
        <Route path='signup' element={
          <Signup/>}/>
        <Route path='/login' element={
          user ? <Navigate to='/travel'/> : <Login handleUserLogin={handleUserLogin} />} />
        <Route path='/' element={
          <Home/>}/>
        <Route element={
          <PrivateRoute user={user}/>}/>
        <Route path='/travel' element={
          <FlightSearch onSearch={handleSearch}/>}/>
        <Route path='/search/search-flights' element={
          <TravelList flightResults={flightResults} errorMessage={errorMessage}/>}/>
        <Route path='/profile' element={
              <PrivateRoute>
              <Profile userID = {user && user.id}/>
            </PrivateRoute>}/>
        </Routes>
        </Router>
  )
}

export default MainRouter