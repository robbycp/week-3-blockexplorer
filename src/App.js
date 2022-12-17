import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PageBalance from './pages/balance'
import PageHome from './pages/home'
import PageTrx from './pages/trx'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/balance">Balance</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/trx/:trxId">
            <PageTrx />
          </Route>
          <Route path="/balance">
            <PageBalance />
          </Route>
          <Route path="/">
            <PageHome />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
