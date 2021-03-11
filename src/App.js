import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';
import TeamDetails from './components/TeamDetails/TeamDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team/:teamID">
          <TeamDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
