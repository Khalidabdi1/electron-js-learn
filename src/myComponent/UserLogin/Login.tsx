
import { Label } from '@/components/ui/label'

import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'



import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ShowAlert from '../ShowAlert'

export default function Login() {

  //show alert
  const [ShowAlerts, SetShowAlerts] = useState<{ Title: string, Description: string, Show: boolean }>({
    Title: "",
    Description: "",
    Show: false
  })

  //for login and sign in
  const [user, Setuser] = useState<{ Password: string, Email: string }>({

    Password: "",
    Email: "",

  })

  //validtion email
  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let emailTest: boolean = true

  if (emailValidation.test(user.Email)) {
    emailTest = false;

  }

function LocalStorage(){

  localStorage.setItem("Email",user.Email)

}

  const Navigate = useNavigate()

  function Login() {

    LocalStorage()
    axios.post("http://localhost:3000/Login", user).then((backend) => {
      console.log(backend.data.massage)
      if (backend.data.massage === "user found") {
        Navigate("/Welcome")
      } else if (backend.data.massage === "user not found") {
        SetShowAlerts(prev => ({ ...prev, Title: "user not found ", Description: "Try to sign in to create account ", Show: true }))

        setTimeout(() => {
          SetShowAlerts(prev => ({ ...prev, Show: false }))
        }, 3000)


      }
    })



  }


  function Signup() {
    axios.post("http://localhost:3000/Signup", user).then((backend) => {
      console.log(backend.data)
    })
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Sign up">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login to your account </CardDescription>
              {/* <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent>
              <Label className='mb-2'>Email </Label>
              <Input placeholder='write your email' className='mb-3' onChange={((e) => {
                Setuser(prev => ({ ...prev, Email: e.target.value }))
              })}></Input>

              <Label className='mb-2'>Password </Label>
              <Input placeholder='write your Password' className='mb-3' onChange={((e) => {
                Setuser(prev => ({ ...prev, Password: e.target.value }))
              })}></Input>


            </CardContent>
            <CardFooter>
              <Button className='w-full' onClick={Login} disabled={emailTest}>Login </Button>
            </CardFooter>
          </Card>
        </TabsContent>


        <TabsContent value="Sign up">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>sign in to your account </CardDescription>
              {/* <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent>
              <Label className='mb-2'>Email </Label>
              <Input placeholder='write your Email' className='mb-3' onChange={((e) => {
                Setuser(prev => ({ ...prev, Email: e.target.value }))
              })}></Input>

              <Label className='mb-2'>Password </Label>
              <Input placeholder='write your Password' className='mb-3' onChange={((e) => {
                Setuser(prev => ({ ...prev, Password: e.target.value }))
              })}></Input>


            </CardContent>
            <CardFooter>
              <Button className='w-full' onClick={Signup}>sign up </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>



      {ShowAlerts.Show === true ? <ShowAlert Title={ShowAlerts.Title} Description={ShowAlerts.Description} /> : null}

    </div>

  )

}