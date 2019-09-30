import React from 'react';
import './Home.css'
import ExpertiseContainer from '../expertise/ExpertiseContainer'
import Photo from '../../Assets/Luke.jpg'

const Home = () => {
  return (
    <div>  
      <div className="home">
        <div className="text-box">
          <span>
            <h1 id="home-name-first">Luke</h1>
          </span>
          <span>
            <h1 id="home-name-middle">L</h1>
          </span>
          <span>
            <h1 id="home-name-period">.</h1>
          </span>
          <span>
            <h1 id="home-name-last">Menard</h1>
          </span>
        </div>
        <h3 id="home-title">Developer & Conservationist</h3>
      </div>
      <div className="bio">
        <span className="bio-content">
          <h2>About Me</h2>
          <p>My passions lie at the intersection of technology, data, and on-the-ground land conservation and management.
          I work to build and promote novel modeling technologies that bolster the capacity of agriculturalists, foresters, and ranchers to manage their land and natural resources in ways that are efficient, profitable, and sustainable.
          </p>
        </span>
        <img className="photo" src={Photo} alt=""/>
      </div>
    </div>
  );
};

export default Home;