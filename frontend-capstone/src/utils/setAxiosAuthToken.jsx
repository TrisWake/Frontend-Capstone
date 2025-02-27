import Axios from "./Axios"

const setAxiosAuthToken = (jwtToken)=>{
    //check if jwt is true
    if(jwtToken){
        //attach headers
        Axios.defaults.headers.common.Authorization = `Bearer ${jwtToken}` //where headers live
    } else {
        //if not, delete
        delete Axios.defaults.headers.common.Authorization
    }
}
export default setAxiosAuthToken