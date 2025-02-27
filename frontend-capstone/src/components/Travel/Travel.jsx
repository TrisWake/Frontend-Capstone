import React, { useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import TravelList from './TravelList'
// import './Travel.css'

    const FlightSearch = ()=>{
        const [origin, setOrigin] = useState('')
        const [destination, setDestination] = useState('')
        const [departureDate, setDepartureDate] = useState('')
        const [flights, setFlights] = useState([])

    const handleOnSearch = async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.get('http://localhost:5000/api/search-flights', {
                params:{origin, destination, departureDate}
            })
            setFlights(response.data)
        } catch (error) {
            console.log('Error fetching flights')
        }
    }
  return ( //search for flghts
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