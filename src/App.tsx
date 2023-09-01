import { useNavigate } from 'react-router-dom'
import './App.css'
import { Button } from '@material-tailwind/react'

function App() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/for-serene-impl/normal');
  return (
    <>
      <div>
        <h1 className='text-5xl text-pink-600 font-signika'>Hello </h1>
        <h1 className='font-marmelad text-6xl text-red-400'>Serene</h1>
        <Button onClick={handleClick}>Click me</Button>
      </div>
    </>
  )
}

export default App
