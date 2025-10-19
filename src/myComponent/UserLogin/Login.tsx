
import { Label } from '@/components/ui/label'

import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'



import axios from 'axios'

import { useState } from 'react'

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

export default function Login() {

  //for login and sign in
  const [user,Setuser] = useState<{ Password: string, Email: string }>({

    Password: "",
    Email: ""
  })

  function Login() {
    axios.post("http://localhost:3000/Login",user).then((backend) => {
      console.log(backend.data.massage)
    })



  }


  function Signin(){
    axios.post("http://localhost:3000/Signin",user).then((backend)=>{
      console.log(backend.data)
    })
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="sign in">sign in</TabsTrigger>
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
              <Button className='w-full' onClick={Login}>Login </Button>
            </CardFooter>
          </Card>
        </TabsContent>


        <TabsContent value="sign in">
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
              <Button className='w-full' onClick={Signin}>sign in </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>



    </div>

  )

}