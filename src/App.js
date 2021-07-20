import logo from './logo.svg';
import './App.css';
import './styles/responsive.css';
import Home from './pages/home'
import Done from './pages/done'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/done">
            <Done />
          </Route>
       
        </Switch>
  </Router>
 
  );
}

export default App;
