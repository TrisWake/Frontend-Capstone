import { jwtDecode } from "jwt-decode";
import setAxiosAuthToken from "./setAxiosAuthToken";



export const checkIfUserIsAuth = ()=>{
    //check to see if it exists
    const jwt = window.localStorage.getItem('jwt')
    if(jwt){
        const currentTime = Date.now()/1000
        const decodedJwt = jwtDecode(jwt)
        //check to make sure its not expired
        //return boolean for authorization 
        const valid = decodedJwt.exp > currentTime
        if(!valid){
            setAxiosAuthToken(null)
        }
        return valid
    }else{
        setAxiosAuthToken(null)
        return false
    }
}