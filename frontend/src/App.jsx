import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
    </>
  )
}

export default App
