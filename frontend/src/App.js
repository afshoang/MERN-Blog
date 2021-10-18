import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'

const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route path='/settings'>
            <Settings />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/write'>
            <Write />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
