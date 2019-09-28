import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavContainer from './components/navbar/NavContainer'
import PortfolioContainer from './components/portfolio/PortfolioContainer'
import Home from './components/home/Home'

const App = (props) => {
  return (
    <Router>
      <NavContainer />
      <div className="Routes">
        <Route path="/" component={Home} />
        <Route exact path="/portfolio" component={PortfolioContainer} />
      </div>
    </Router>

  );
}

export default App;
