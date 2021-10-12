import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Rockets from './pages/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';

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
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
);

export default App;
