//axios instance 
import axios from "axios"

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api', //make it so we dont have to include that portion in call
    timeout: 50000, //if server hangs for more than 50 sec, throw error
})

export default Axios