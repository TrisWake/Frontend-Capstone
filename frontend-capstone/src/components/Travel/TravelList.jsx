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
                            <h3>{flight.airline}</h3>
                            <p>Departure: {flight.departure}</p>
                            <p>Return: {flight.arrival}</p>
                            <p>Price: {flight.price}</p>
                        </Link>
                    </div>
                )
            )
        }
export default TravelList;