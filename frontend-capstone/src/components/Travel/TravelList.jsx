import { Link } from 'react-router-dom'

function TravelList({ flightResults, errorMessage }) {
    if(errorMessage){
        return <div style={{color: 'red'}}>{errorMessage}</div>
    }
    if(flightResults.length === 0){
        return <div>No Flight Results found</div>
    }
    return flightResults.map((flight)=>(
                    <div key={flight.id} className='flight-item'>
                        <Link to={`/travel/${flight.id}`} className='flight-link'>
                            <h3>{payload.airports.best_flights}</h3>
                            <p>Departure: {payload.flights[0].departure_airport}</p>
                            <p>Return: {payload.flights[0].arrival_airport}</p>
                            <p>Price: {payload.flights[0].price}</p>
                            <p>Type: {payload.flights[0].type}</p>
                        </Link>
                    </div>
                )
            )
        }
export default TravelList;