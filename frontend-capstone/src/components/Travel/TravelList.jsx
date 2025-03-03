import { Link } from 'react-router-dom'

function TravelList({ travelList }) {
    return (
        <div>
            {travelList.map((travel, index) => {
                return (
                    <div key={index}> {/* Use a unique key for each item */}
                        <Link to={`/travel/${travel.id}`}> {/* Replace with actual travel details */}
                            <div>
                                <h3>{travel.origin} to {travel.destination}</h3>
                                <p>Departure: {travel.departureDate}</p>
                                <p>Return: {travel.returnDate}</p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default TravelList;