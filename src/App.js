import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Button from './components/Button'
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route exact path="/missions">
        <Missions />
      </Route>
    </Switch>
  </Router>
);

export default App;
