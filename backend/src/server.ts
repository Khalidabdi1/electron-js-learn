import express,{ Request,Response} from "express"
import cors from "cors"
import { supabase } from "./supabaseClient"
let app =express()

app.use(express.json())
app.use(cors())


app.post("/",async(req:Request,res:Response)=>{
    let {Email,Password}=req.body
    const {data,error}=await supabase.auth.signInWithOtp({
       email:Email,
   
    //    password:Password
    })

    if(error){
        console.log("the error is",error)
    }else{
        console.log(data.user)
    }
})

app.listen(3000,()=>{

    console.log("server is work")
})








