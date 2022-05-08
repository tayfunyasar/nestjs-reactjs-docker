import React from 'react'
import { Mobile } from './routes'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => (
  <Router>
    <h1 className="text-3xl font-bold underline">
      Mobile App!
    </h1>
    <Routes>
      <Route path="/" element={<Mobile />} />
    </Routes>
  </Router>
)

export default App
