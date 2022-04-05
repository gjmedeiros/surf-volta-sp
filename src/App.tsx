import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/login'
import Adm from './pages/adm'

import './assets/styles/global.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Management/login" element={<Login />} />
          <Route path="/Management/adm" element={<Adm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
