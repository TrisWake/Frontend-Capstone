import {useState} from 'react'
import './SignUp.css'
import { isAlpha, isAlphanumeric, isEmail } from "validator"
import { Slide, toast } from "react-toastify"
import axios from 'axios'


function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordConfirmError, setPasswordConfirmError] = useState('')

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        let isValid = true
        if(!isAlpha(firstName)){
            setFirstNameError('First name must contain only letters')
            let isValid = false
        }else{
            setFirstNameError('')
        }
        if(!isAlpha(lastName)){
            setLastNameError('First name must contain only letters')
            isValid = false
        }else{
            setLastNameError('')
        }
        if(!isAlphanumeric(username)){
            setUsernameError('Username must be alphanumeric.')
            isValid = false
        }else{
            setUsernameError('')
        }
        if(!isEmail(email)){
            setEmailError('Email must be valid')
            isValid = false
        }else{
            setEmailError('')
        }
        if(password !== confirmPassword){
            setPasswordConfirmError('Passwords must match')
            isValid = false
        }else{
            setPasswordConfirmError('')
        }
        if(firstNameError.length === 0 && 
            lastNameError.length === 0 &&
            usernameError.length === 0 &&
            emailError.length === 0 && 
            passwordConfirmError.length === 0
        ){
            try {
                const user = await axios.post('/user/create-user', {
                    firstName, lastName, username, email, password
                })
                if(user){
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setUsername('')
                    setPassword('')
                    setConfirmPassword('')
                    toast.success("User Created Successfully.", {
                        position: 'top-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark',
                        transition: Slide
                    })
                }
            } catch (error) {
                toast.error('Please Try Again.')
                console.log(error)
            }
        }
    }
    if(isValid){
        console.log('Form submitted successfully')
    }

    handleOnBlur = (e)=>{
        if(e.target.name.length === 0){
            eval(`set${e.target.name}Error`)
        }
    }
  return (
    <div className="container">
        <div className="form-text">Sign up</div>
        <div className="form-div">
            <form className="form" onSubmit={handleOnSubmit}>
                <div className="form-group-inline">
                    <div className="inline-container">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id='firstName'
                            placeholder='First Name'
                            name="firstName"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <div className="errorMessage">
                            
                        </div>
                    </div>
                    <div className="inline-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id='lastName'
                            placeholder='Last Name'
                            name="lastName"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <div className="errorMessage">
                            
                        </div>
                    </div>
                </div>
                <div className="form-group-block">
                    <div className="block-container">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id='email'
                            placeholder='Email'
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <div className="errorMessage">
                            
                        </div>
                    </div>
                </div>
                <div className="form-group-block">
                    <div className="block-container">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id='username'
                            placeholder='Username'
                            name="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <div className="errorMessage">
                           
                        </div>
                    </div>
                </div>
                <div className="form-group-block">
                    <div className="block-container">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id='password'
                            placeholder='Password'
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className="errorMessage">
                            
                        </div>
                    </div>
                </div>
                <div className="form-group-block">
                    <div className="block-container">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id='confirmPassword'
                            placeholder='Confirm Password'
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        <div className="errorMessage">
                            
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp