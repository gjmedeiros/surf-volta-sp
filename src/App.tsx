import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'

import './assets/styles/global.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
