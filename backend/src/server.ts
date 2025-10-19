import express,{ Request,Response} from "express"
import cors from "cors"
import { supabase } from "./supabaseClient"
let app =express()

app.use(express.json())
app.use(cors())


app.post("/Login",async(req:Request,res:Response)=>{
    let {Email,Password}=req.body
    const {data,error}=await supabase.auth.signInWithOtp({
       email:Email,
//    options:{
//     emailRedirectTo:"http://localhost:3000/Welcome"
//    }
    //    password:Password
    })

    if(error){
        console.log("the error is",error.message)
    }else{
        console.log(data.user)
        res.json({massage:"magic link is send"})
    }
})

// app.post("/verfiy",(req:Request,res:Response)=>{
//     let{otp}=req.body

//     const{data,error}=await supabase.auth.verifyOtp({
//         email
//     })
// })

app.listen(3000,()=>{

    console.log("server is work")
})








