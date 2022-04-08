import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Adm from './pages/Adm'
import Landing from './pages/Landing'
import Login from './pages/Login'

import './assets/styles/global.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Management/login" element={<Login />} />
      <Route path="/Management/adm" element={<Adm />} />
    </Routes>
  </BrowserRouter>
)

export default App
