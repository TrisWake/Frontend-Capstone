import { useEffect, useState } from "react";
import './Profile.css'
import Axios from "../../utils/Axios";
import { toast } from "react-toastify";


function Profile({userID}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    useEffect(()=>{
        const getInfo = async()=>{
            try {
                if(userID){
                    const response = await Axios.get(`/user/get-user-by-id/${userID}`)
                    if(response.data && response.data.payload){
                    const {firstName, lastName, email, username} = response.data.payload
                    setFirstName(firstName)
                    setLastName(lastName)
                    setEmail(email)
                    setUsername(username)
                }
            }
            } catch (error) {
                console.log(error)
                toast.error("Erorr fetching profile data")
            }
        }
        if(userID){
            getInfo()
        }
    }, [userID])

    const updateUser = async(e)=>{
        try {
            e.preventDefault()
            const response = await Axios.put(`/user/update-user-by-id/${userID}`,{
                firstName, lastName, email, username
            })
            toast.success(response.data.payload.message)
        } catch (error) {
            toast.error(error)
        }
    }
  return (
    <div>
        <div className="update-container">
            <h3>Update Profile</h3>
            <form onSubmit={updateUser}>
                <div className="input-div">
                    <input type="text" 
                    name="firstName"
                    onChange={e=> setFirstName(e.target.value)}
                    value={firstName}/>
                </div>
                <div className="input-div">
                    <input type="text" 
                    name="lastName"
                    onChange={e=> setLastName(e.target.value)}
                    value={lastName}/>
                </div>
                <div className="input-div">
                    <input type="text" 
                    name="email"
                    onChange={e=> setEmail(e.target.value)}
                    value={email}/>
                </div>
                <div className="input-div">
                    <input type="text" 
                    name="username"
                    onChange={e=> setUsername(e.target.value)}
                    value={username}/>
                </div>
                <div className="input-div">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Profile