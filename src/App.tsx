import { Route, Routes } from 'react-router-dom'

import { RequireAuth } from './contexts/Auth/RequireAuth'
import Adm from './pages/Adm'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Market from './pages/Market'

import './assets/styles/global.css'

function App() {
  return (
    <Routes>
      {/* Route Publica */}
      <Route path="/" element={<Landing />} />
      <Route path="/Management/Market" element={<Market />} />
      <Route path="/Management/login" element={<Login />} />

      {/* Route Privada */}
      <Route
        path="/Management/adm"
        element={
          <RequireAuth>
            <Adm />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export default App
