import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h1>Welcome to the Home Page</h1>
      <div className='link-container'>
        <Link to="/travel" className='search-link'>
          Search Flights
        </Link>
      </div>
    </div>
  );
}

export default Home;