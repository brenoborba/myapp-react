import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./Home";
import TemplateDefault from './Templates/Default'

const App = () =>  {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>

  )
}

export default App;
