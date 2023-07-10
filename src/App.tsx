// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Welcome from "./pages/welcome/Welcome"
import { MainBoard } from "./pages/MainBoard/MainBoard"

import { Services } from './assets/Services'
// import './App.css'

const App: React.FC = () => {
// const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<MainBoard services={Services} />}>

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
