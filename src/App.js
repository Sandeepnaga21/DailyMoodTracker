import {Route, Switch} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ReportsRoute from './components/ReportsRoute'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/reports" component={ReportsRoute} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
