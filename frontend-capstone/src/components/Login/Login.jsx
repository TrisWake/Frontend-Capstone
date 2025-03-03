import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import Axios from '../../utils/Axios'
import setAxiosAuthToken from '../../utils/setAxiosAuthToken'

function Login({handleUserLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate() //This is used for redirects

    const handleOnSubmit = async (e) => {
      e.preventDefault()
      try {
        // api/user/login 
        const response = await Axios.post('/user/login', {email, password})
        // email and password in body
        setEmail('')
        setPassword('')
        const jwt = response.data.payload
        setAxiosAuthToken(jwt) //set headers for authentication 
        const decodedJwt = jwtDecode(jwt)
        handleUserLogin({
          username: decodedJwt.user,
          email: decodedJwt.email,
          id: decodedJwt.id
        })
        window.localStorage.setItem('jwt', jwt)
        toast.success('User logged in')
        navigate('/movie')

        // save in local storage jwt
        // make function else where to be called to hold login data
        // make function to hold jwt
        
      } catch (error) {
        toast.error('Server Error. Try again')
        console.log(error)
      }

      //catch errors
    }

  return (
    <div className="container">
        <div className="form-text">Login</div>
        <div className="form-div">
          <form onSubmit={handleOnSubmit} className="form">
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder='Email' 
                    name="email"
                    value = {email}
                    onChange={(e)=> setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder='Password'
                  name="password"
                  value={password} 
                  onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login