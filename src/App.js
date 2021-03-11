import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NoMatch from './Components/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
      <Route path = "/home">
        <Home />
      </Route>
      <Route path = "/team/:id">
        <TeamDetails />
      </Route>
      <Route path = "*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
