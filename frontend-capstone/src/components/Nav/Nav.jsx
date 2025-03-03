import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

function Nav({ user, handleUserLogout }) {
  return (
    <nav className="Navbar">
      <div className="h1-logo">
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </div>
      <div className="right-side-nav">
        <ul>
          {user ? (// Display email of the logged-in user
            <li>{user.email}</li>
          ) : (
            // Show Sign Up link if no user is logged in
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          )}
          {user ? (
            <li>
            <NavLink to="/login" onClick={handleUserLogout}>
                Logout
              </NavLink>
            </li>
          ) : (
            // Show Sign In link if no user is logged in
            <li>
              <NavLink to="/login">Sign In</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Nav