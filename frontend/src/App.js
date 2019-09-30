import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavContainer from './components/navbar/NavContainer'
import PortfolioContainer from './components/portfolio/PortfolioContainer'
import ExpertiseContainer from './components/expertise/ExpertiseContainer'
import ExperienceContainer from './components/experience/ExperienceContainer'
import ContactContainer from './components/contact/ContactContainer'
import Home from './components/home/Home'
import Footer from './components/footer/Footer';

const App = (props) => {
  return (
    <div>
      <Router>
        <NavContainer />
        <div className="Routes">
          <Route exact path="/" component={Home} />
          <Route exact path='/experience' component={ExperienceContainer} />
          <Route exact path='/expertise' component={ExpertiseContainer} />
          <Route exact path="/portfolio" component={PortfolioContainer} />
          <Route exact path="/contact" component={ContactContainer} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
