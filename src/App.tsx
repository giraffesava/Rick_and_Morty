import React from 'react'
import Body from './components/Body/Body'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EpisodePage from './components/EpisodePage/EpisodePage'
const App: React.FC = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/:id" component={EpisodePage} />
        <Route path="/" exact component={Body} />
      </Switch>
    </div>
  </Router>
)

export default App
