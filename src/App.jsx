import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './assets/scss/global.scss';
import { AppHeader } from './cmps/AppHeader'
import { BITCoinApp } from './pages/BITCoinApp';
import { ContactDetails } from './pages/ContactDetails';
import { ContactEdit } from './pages/ContactEdit';
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={ContactEdit} path='/contact/edit/:id?' />
          <Route component={ContactDetails} path='/contact/:id' />
          <Route component={BITCoinApp} path='/contact' />
          <Route component={Home} path='/' />
        </Switch>
      </div>
    </Router>
  );
}

