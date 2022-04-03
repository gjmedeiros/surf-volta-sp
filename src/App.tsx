import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Management from './page Management'

import './assets/styles/global.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Management/adm" element={<Management />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
