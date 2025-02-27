import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

function Nav({user, handleUserLogout}) {
  return (
    <nav className='Navbar'>
        <div className="h1-logo">
            <h1>
                <Link to='/'>Home</Link>
            </h1>
        </div>
        <div className="right-side-nav">
            <ul>
                {user ? (
                <li>
                    {user.email}
                </li>
                ):( //if no one is logged in, display sign up link
                    <li>
                    <NavLink to='/signup'>
                        Sign Up
                    </NavLink>
                </li>
                )}
                {
                    user ? (
                        <li>
                        <NavLink to='/login' onClick={handleUserLogout}>Logout</NavLink>
                        </li>
                    ):(
                <li>
                    <NavLink to='/signin'>
                        Sign In
                    </NavLink>
                </li>
                    )}
                
            </ul>
        </div>
    </nav>
  )
}

export default Nav