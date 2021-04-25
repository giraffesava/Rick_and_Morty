import React from 'react'
import Body from './components/Body/Body'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EpisodePage from './components/EpisodePage/EpisodePage'
import Location from './components/Location/Location'

const App: React.FC = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/episode/:id" component={EpisodePage} />
        <Route path="/" exact component={Body} />
        <Route path="/location/:id" component={Location} />
      </Switch>
    </div>
  </Router>
)

export default App
