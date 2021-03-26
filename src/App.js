import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/Homepage';
import DiscountPage from './pages/DiscountPage';
import StatisticsPage from './pages/StatisticsPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import QuitPage from './pages/QuitPage';

import Sidebar from './containers/Sidebar';

import './assets/styles/main.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Sidebar/>
          <Switch>
            <Route path='/home'>
              <HomePage/>
            </Route>
            <Route path='/discount'>
              <DiscountPage/>
            </Route>
            <Route path='/statistics'>
              <StatisticsPage/>
            </Route>
            <Route path='/messages'>
              <MessagesPage/>
            </Route>
            <Route path='/notification'>
              <NotificationsPage/>
            </Route>
            <Route path='/settings'>
              <SettingsPage/>
            </Route>
            <Route path='/quit'>
              <QuitPage/>
            </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
