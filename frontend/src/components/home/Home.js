import React, {Component} from 'react';
import './Home.css'
import ExpertiseContainer from '../expertise/ExpertiseContainer'
import Photo from '../../Assets/Luke2.JPG'
import Timeline from 'react-timeline-semantic-ui';
import ScrollAnimation from 'react-animate-on-scroll';

const experiencesURL = "http://localhost:3000/experiences"


class Home extends Component {
  state = {
    experiences: []
  }

  componentDidMount() {
      this.fetchExperiences()
  }

  fetchExperiences = () => {
      fetch(experiencesURL)
      .then(response => response.json())
      .then(results => this.setState({
          experiences: results
      }))
  }

  render() {
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
          <hr className="home-title-line"></hr>
          <h3 id="home-title">Developer & Conservationist</h3>
        </div>
        <div className="bio">
          <span className="bio-content">
            <h2>About Me</h2>
            <hr className="bio-line"></hr>
            <p>My passions lie at the intersection of technology, data, and on-the-ground land conservation and management.
            I work to build and promote novel modeling technologies that bolster the capacity of agriculturalists, foresters, and ranchers to manage their land and natural resources in ways that are efficient, profitable, and sustainable.
            </p>
          </span>
          <img className="photo" src={Photo} alt=""/>
        </div>

        <div className="hero-image-2"></div>

        <div className="page-title">
          My Journey
          <hr className="experience-title-line"></hr>
        </div>
          <div className="timeline">
            <div className="Timeline-line-manual"></div>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Flatiron School"
                direction="left"
                icon="large graduation cap"
                time="2019"
                description="Full-Stack Web Development Immersive"
                color="purple"
                tags={["Education", "Coding", "Software"]}
                labelColor="purple"
                // lineHeight={1}
                lineColor="transparent"
              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Agrarian Labs"
                direction="right"
                icon="large briefcase"
                time="2018 to 2019"
                description="Agricultural Data Strategist"
                color="orange"
                tags={["Startup", "Data", "Agriculture"]}
                labelColor="orange"
                lineHeight={0.5}
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Yale University"
                direction="left"
                icon="large briefcase"
                time="2017 to 2018"
                description="Tropical Forest Conservation Fellow, Sri Lanka"
                color="orange"
                tags={["Research", "Conservation", "Forestry"]}
                labelColor="orange"
                // lineHeight={1}
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Yale University"
                direction="right"
                icon="large briefcase"
                time="2017"
                description="Silviculture and Forest Ecology Research Assistant"
                color="orange"
                tags={["Research", "Forestry", "Ecology"]}
                labelColor="orange"
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="The Yale School Forests"
                direction="left"
                icon="large briefcase"
                time="2017"
                description="Apprentice Forester"
                color="orange"
                tags={["Forestry"]}
                labelColor="orange"
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="New Canaan Land Trust"
                direction="right"
                icon="large briefcase"
                time="2016 to 2017"
                description="Geospatial Consultant"
                color="orange"
                tags={["Cartography", "Mapping"]}
                labelColor="orange"
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Ucross High Plains Stewardship Iniative"
                direction="left"
                icon="large briefcase"
                time="2016 to 2017"
                description="Geospatial Researcher"
                color="orange"
                tags={["Conservation", "Mapping", "Rangeland Management"]}
                labelColor="orange"
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Ecotrust"
                direction="right"
                icon="large briefcase"
                time="2016"
                description="Forestry and Ecosystem Services Intern"
                color="orange"
                tags={["Mapping", "Forestry", "Land Use Change"]}
                labelColor="orange"
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Yale School of Forestry and Environmental Studies"
                direction="left"
                icon="large graduation cap"
                time="2015 to 2017"
                description="Master of Environmental Management"
                color="purple"
                tags={["Education", "Conservation", "Technology"]}
                labelColor="purple"
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="CommunicateHealth"
                direction="right"
                icon="large briefcase"
                time="2013 to 2015"
                description="Environmental Health Associate"
                color="orange"
                tags={["Consulting", "Communications"]}
                labelColor="orange"
                lineColor="transparent"

              />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
              <Timeline
                title="Amherst College"
                direction="left"
                icon="large graduation cap"
                time="2008 to 2012"
                description="B.A. in Environmental Studies"
                color="purple"
                tags={["Education", "Conservation"]}
                labelColor="purple"
                lineColor="transparent"

              />
              </ScrollAnimation>
        </div>
      </div>
    );
  };
}

export default Home;