
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './myComponent/UserLogin/Login'
import AfterLogin from './myComponent/UserLogin/AfterLogin'
import Home from './myComponent/HomePage/Home'

function App() {


  return (
    <div className='flex items-center justify-center h-screen'>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Welcome' element={<AfterLogin/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
  </Routes>



    </div>
  )
}

export default App
