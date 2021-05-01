import React from 'react'
import Body from './components/Body/Body'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EpisodePage from './components/EpisodePage/EpisodePage'
import Location from './components/Location/Location'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display: none;
}
`

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <div>
        <Switch>
          <Route path="/episode/:id" component={EpisodePage} />
          <Route path="/" exact component={Body} />
          <Route path="/location/:id" component={Location} />
        </Switch>
      </div>
    </Router>
  </>
)

export default App
