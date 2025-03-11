import React, { useState } from 'react'
import './Travel.css'
import { useNavigate } from 'react-router-dom'
import Axios from '../../utils/Axios'

    const FlightSearch = ({onSearch})=>{
        const [origin, setOrigin] = useState('')
        const [destination, setDestination] = useState('')
        const [departureDate, setDepartureDate] = useState('')
        const [returnDate, setReturnDate] = useState('')
        const [passengers, setPassengers] = useState('')
        const [classOfService, setClassOfService] = useState('economy')
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)

        const navigate = useNavigate()

    const handleOnSearch = async(e)=>{
        e.preventDefault()
        try {
            const response = await Axios.post('/search/search-flights', {
                origin: "MEM",
                destination: "MDW", 
                departureDate: "2025-03-28", 
                returnDate: "2025-04-03"
            })
            onSearch(response.data.payload, null)
        } catch (error) {
            onSearch(null, error)
            console.log(error)
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
            <input type="date"
                value={returnDate}
                onChange={(e)=>setReturnDate(e.target.value)}
            />
            <input type="number"
                value={passengers}
                onChange={(e)=>setPassengers(e.target.value)}
                placeholder='Travelers'
            />
            <select name="classOfService" value={classOfService} onChange={(e) => setClassOfService(e.target.value)}>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
            </select>
            <button onClick={handleOnSearch}>Search Flights</button>
    
            {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}

export default FlightSearch