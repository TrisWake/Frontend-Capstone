import React, { useState } from 'react'
import axios from 'axios'
import './Travel.css'
import { useNavigate } from 'react-router-dom'

    const FlightSearch = ({onSearch})=>{
        const [origin, setOrigin] = useState('')
        const [destination, setDestination] = useState('')
        const [departureDate, setDepartureDate] = useState('')
        const [returnDate, setReturnDate] = useState('')
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)

        const API_KEY = 'c5883776698052b67a7a4a5e742705f52b7b644f924093a50d59101ad190ed91'
        const navigate = useNavigate()

    const handleOnSearch = async(e)=>{
        e.preventDefault()
        const url = `https://serpapi.com/search.json?engine=google_flights&q=${origin}+to+${destination}&departure_date=${departureDate}&return_date=${returnDate}&api_key=${API_KEY}`
        console.log(url)
        try {
            const response = await axios.get(url)
            onSearch(response.data.flights, null)
            navigate('/flights/results')
        } catch (error) {
            setError('Error fetching flights. Please try again.')
            onSearch([], 'Error fetching flights. Please try again')
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
    
            {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}

export default FlightSearch