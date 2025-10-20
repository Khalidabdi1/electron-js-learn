import { useEffect,useState } from "react"
import axios from "axios"
import { userData } from "../Context/User"




export default function Home() {

    function checkuser(){
        const access_token=localStorage.getItem("access_TOKEN")
        axios.get("http://localhost:3000/checkuser",access_token).then((backend)=>{
            console.log(backend.data)
        })
        
    }

    useEffect(() => {
       checkuser()

    }, [])
    return (
        <userData.Provider value={{}}>
        <div>
            <h1>Home page</h1>
        </div>
        </userData.Provider>
    )
}