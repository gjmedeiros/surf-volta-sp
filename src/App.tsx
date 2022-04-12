import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Adm from './pages/adm'
import Landing from './pages/Landing'
import Login from './pages/login'
import Market from './pages/market'

import './assets/styles/global.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/market" element={<Market />} />
      <Route path="/Management/login" element={<Login />} />
      <Route path="/Management/adm" element={<Adm />} />
    </Routes>
  </BrowserRouter>
)

export default App
