import { Link } from 'react-router-dom'

function TravelList({ flightResults, errorMessage }) {
    if(errorMessage){
        return <div style={{color: 'red'}}>{errorMessage}</div>
    }
    if(flightResults.length === 0){
        return <div>No Flight Results found</div>
    }
    return flightResults.map((flight, index)=>{
                return (
                    <div key={index}>
                        <Link to={`/travel/${flight.id}`}>
                        <div>
                            <h3>{flight.origin} to {flight.destination}</h3>
                            <p>Departure: {flight.departure_time}</p>
                            <p>Return: {flight.return_time}</p>
                        </div>
                        </Link>
                    </div>
                )
            }
        )
    }
export default TravelList;