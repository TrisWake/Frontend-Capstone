import { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import Axios from '../../utils/Axios'
import setAxiosAuthToken from '../../utils/setAxiosAuthToken'
import { useNavigate } from 'react-router-dom'

function Login({ handleUserLogin }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleOnSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await Axios.post('/user/login', {email, password})
        console.log(response)
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
        navigate('/home')
      } catch (error) {
        toast.error('Server Error. Try again')
        console.log(error)
      }
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