import React, { useState } from 'react'
import FlightSearch from '../Travel/Travel'
import TravelList from '../Travel/TravelList'

function FlightPage() {
    const [flightResults, setFlightResults] = useState([])
    const [error, setError] = useState('')

    const handleSearch = (results, errorMessage) =>{
        if(results){
            setFlightResults(results)
        }else{
            setError(errorMessage)
        }
    }
  return (
    <div>
        <h1>Flight Search</h1>
        <FlightSearch onSearch={handleSearch}/>
        <TravelList flightResults={flightResults} errorMessage={error}/>
    </div>
  )
}

export default FlightPage