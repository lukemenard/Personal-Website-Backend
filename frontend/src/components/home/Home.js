import React from 'react';
import './Home.css'
import ExpertiseContainer from '../expertise/ExpertiseContainer'
import Photo from '../../Assets/Luke.jpg'

const Home = () => {
  return (
    <div>  
      <div className="home">
        <div className="text-box">
          <h1 id="home">Luke Menard</h1>
          <h3 id="home">Developer. Conservationist. Tired.</h3>
        </div>
      </div>
      <img className="photo" src={Photo} alt=""/>
    </div>
  );
};

export default Home;