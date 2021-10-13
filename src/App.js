import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navigation from './components/navigation/Navigation';
import Rockets from './pages/Rockets';
import Missions from './components/missions/Missions';
import { fetchGetMissions } from './redux/missions/missions';
import Profile from './components/profile/Profile';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetMissions());
  }, []);

  return (
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
};

export default App;
