import React from 'react'
import { Dashboard, } from 'routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => (
  <Router>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
)

export default App
