import SignUp from "./components/SignUp/SignUp"
import './App.css'
import {ToastContainer} from "react-toastify"
import'react-toastify/dist/ReactToastify.css'
import MainRouter from "./MainRouter"
import Home from "./components/Home/Home"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import setAxiosAuthToken from "./utils/setAxiosAuthToken"

  function App() {  //entrance point, ToastCOntainer is the Banner with feedback
    const [user, setUser] = useState(null)
 
    useEffect(()=>{
      const jwt = window.localStorage.getItem('jwt') 
      const currentUser = jwt ? jwtDecode(jwt): null
      if(currentUser && currentUser.exp > (Date.now()/1000)){
        setUser({
          username: currentUser.username,
          email: currentUser.email,
          id: currentUser.id
        })
        setAxiosAuthToken(jwt)
      } else{
        window.localStorage.removeItem('jwt') 
      }
    }, [])

    const handleUserLogin = (user)=>{
      setUser(user)
    }

    const handleUserLogout = (user)=>{
      setUser(null)
      window.localStorage.removeItem('jwt')
      setAxiosAuthToken(null)
    }

    

    return (
      <>
    <ToastContainer position="top-center"/> 
      <MainRouter 
      user = {user} handleUserLogout = {handleUserLogout}
      handleUserLogin = {handleUserLogin}/>
    </>
  )
}

export default App