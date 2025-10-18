
import './App.css'

function App() {
function handleClick(){
  window.electronAPI.CreateFile("test.txt","test create file")

  window.electronAPI.fileResponse((massage)=>{
    console.log(massage)
  })
}
  return (
    <>
      <div>
        <button className='btn' onClick={handleClick}>test</button>
      </div>
    </>
  )
}

export default App
