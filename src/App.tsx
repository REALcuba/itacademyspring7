import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//components
import Welcome from "./pages/welcome/Welcome"
import { MainBoard } from "./pages/MainBoard/MainBoard"

//array of services
import { Services } from './assets/Services'
// import './App.css'

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false)

  const handleLoginBtn = () => setIsLogin(true)

  return ( 
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<MainBoard services={Services} />} />
        ) : (
          <>
            <Route path="/" element={<Welcome isLogin={isLogin} handleLoginBtn={handleLoginBtn} />} />
          </>
        )}
      </Routes>

    </BrowserRouter>
  )
}

export default App