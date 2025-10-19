
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './myComponent/UserLogin/Login'
import AfterLogin from './myComponent/UserLogin/AfterLogin'

function App() {


  return (
    <div className='flex items-center justify-center h-screen'>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Welcome' element={<AfterLogin/>}></Route>
  </Routes>



    </div>
  )
}

export default App
