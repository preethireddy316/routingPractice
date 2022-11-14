/* eslint-disable import/no-named-as-default-member */
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
