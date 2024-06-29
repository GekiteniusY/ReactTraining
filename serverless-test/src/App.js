import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import page1 from './pages/page1';
import page2 from './pages/page2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <Switch>
            <Route path='/Page1' Component={page1} />
            <Route path='/Page2' Component={page2} />
          </Switch>
        </Router>
        <Stopwatch></Stopwatch>
      </header>
    </div>
  );
}

export default App;
