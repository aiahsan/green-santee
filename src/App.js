import React from 'react';
import './App.css';
import './styles/responsive.css';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  const [isScroll, setisScroll] = React.useState(false);
  const listenScrollEvent = (e) => {
    if (window.scrollY > 107) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home isScroll={isScroll} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
