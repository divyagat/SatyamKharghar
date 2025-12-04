import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './pages/Hero'
import EnquiryPopup from './components/EnquiryPopup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>   
      <Hero/>
      {/* <EnquiryPopup/> */}
    </>
  )
}

export default App
