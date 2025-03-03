import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TravelList from './TravelList'
import './Travel.css'

    const FlightSearch = ()=>{
        const [origin, setOrigin] = useState('')
        const [destination, setDestination] = useState('')
        const [departureDate, setDepartureDate] = useState('')
        const [returnDate, setReturnDate] = useState('')
        const [flights, setFlights] = useState([])
        const API_KEY = 'c5883776698052b67a7a4a5e742705f52b7b644f924093a50d59101ad190ed91'

    const handleOnSearch = async(e)=>{
        e.preventDefault()
        const url = `https://serpapi.com/search.json?engine=google_flights&q=${origin}+to+${destination}&departure_date=${departureDate}&return_date=${returnDate}&api_key=${API_KEY}`
        try {
            const response = await axios.get(url)
            console.log(response.data)
            setFlights(response.data.flights)
        } catch (error) {
            console.log('Error fetching flights', error)
        }
    }
  return ( 
    <div>
            <input type="text" 
            placeholder='Origin'
            name='Origin'
            value={origin}
            onChange={(e)=> setOrigin(e.target.value)}
            />
            <input type="text"
                placeholder='Destination'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <input type="date"
                value={departureDate}
                onChange={(e)=>setDepartureDate(e.target.value)}
            />
            <button onClick={handleOnSearch}>Search Flights</button>
    
            {flights && (
                <div>
                    {flights.map((flight, index) =>(
                        <div key={index}>
                            <h3>{flight.legs[0].departure.dateTime}</h3>
                            <p>{flight.legs[0].arrival.airport.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
  )
}

export default FlightSearch