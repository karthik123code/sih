import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Home} from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Scrapper } from './pages/Scrapper'
import { Form } from './pages/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Signin />} />
    <Route path='/form' element={<Form />} />
    <Route path='/insta' element={<Scrapper />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
