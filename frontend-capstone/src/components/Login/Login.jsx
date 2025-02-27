import { useState } from 'react'
import './Login.css'
import axios from 'axios'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = async (e) => {
      e.preventDefault()
      try {
        // api/user/login 
        const response = await axios.post('http://localhost:3000/api/user/login', {email, password})
        // email and password in body
        setEmail('')
        setPassword('')
        const jwt = response.data.payload
        window.localStorage.setItem('jwt', jwt)

        // save in local storage jwt
        // make function else where to be called to hold login data
        // make function to hold jwt
        
      } catch (error) {
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