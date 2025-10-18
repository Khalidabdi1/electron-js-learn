
import './App.css'
import { Button } from './components/ui/button'
import { useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

import { SearchIcon } from 'lucide-react'
import { todo } from 'node:test'

function App() {

  const [text,SetText]=useState<(string |null)>("")
  const[user,SetUser]=useState<any[]>([{
    toDo:"",
  }])
 

  function handleTo(){
window.electronAPI.test()

SetUser(prev=>[...prev,{toDo:text ?? ""}])


  }

  return (
    <>
      <div className='flex flex-col justify-between  h-screen'>
        <div className='h-[90%]   overflow-auto  scrollbar-none'>
{user.map((e,i)=>{
  return(
    <div key={i} className='bg-zinc-900' >
      <h1>{e.toDo}</h1>
      <br></br>
    </div>
  )
})}
        </div>

        <div className='mb-3 mx-2'>
          <InputGroup className='rounded-full '>
            <InputGroupInput placeholder="Search..." onChange={((e)=>{
              SetText(e.target.value)
            })}/>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton  className='rounded-full p-2 text-white' onClick={handleTo}>
           add
              
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>



      </div>
    </>
  )
}

export default App
