import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from "./pages/Home";
import TemplateDefault from './templates/Default'
import Customers from './pages/Customers'

const App = () =>  {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path={"/customers"}>
            <Customers />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>

  )
}

export default App;
