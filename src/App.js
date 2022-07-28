import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from "./pages/Home";
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import Customers from './pages/Customers'

const App = () =>  {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path={"/customers"}>
            <TemplatePage title={"Clientes"} Component={Customers} />
          </Route>
          <Route path={"/"}>
            <TemplatePage title={"Home"} Component={Home}/>
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>

  )
}

export default App;
