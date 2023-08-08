import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//components
import Welcome from "./pages/welcome/Welcome"
import { MainBoard } from "./pages/MainBoard/MainBoard"
import ServiceBudgetPage from './pages/serviceBudget/ServiceBudgetPage'

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
          <Route path="/main-board" element={<MainBoard services={Services} />} />
        ) : ( 

            <Route path="/main-board" element={<Welcome isLogin={isLogin} handleLoginBtn={handleLoginBtn} />} />

        )}
        <Route path="/service-budget" element={<ServiceBudgetPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App