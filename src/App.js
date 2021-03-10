import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/home">
          <Home />
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
