import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Chat from './Chat'
import Lenis from 'lenis'

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp:0.08
});


export default function App(){
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/chat' element={<Chat />} />
   </Routes>
  )
}
