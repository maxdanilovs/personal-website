import React from 'react';
import '../style/home.scss';
import RubyLogo from '../images/ruby_logo.png';
import RailsLogo from '../images/rails_logo.svg';
import JsLogo from '../images/javascript_logo.png';
import ReactLogo from '../images/react_logo.png';
import HtmlLogo from '../images/html_logo.png';
import CssLogo from '../images/css_logo.png';
import NodeLogo from '../images/node_logo.png';


function Home() {

  const scrollToAbout = (e) => {
    e.preventDefault();
    const page = document.getElementById('about');
    page.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="home">
    <div className="top-space"></div>
      <div className="container main-info">
        <h1>Hello, my name is Max</h1>
        <h2>I'm a full-stack web developer</h2>
        <div className="logos">
          <ul>
            <li>
              <img src={RubyLogo} alt="Ruby" className="skill-logo"/>
              <img src={RailsLogo} alt="Rails" className="skill-logo"/>
              <img src={NodeLogo} alt="Node" className="skill-logo"/>
              <img src={ReactLogo} alt="React" className="skill-logo"/>
            </li>
            <li>
              <img src={JsLogo} alt="JS" className="skill-logo"/>
              <img src={HtmlLogo} alt="html" className="skill-logo"/>
              <img src={CssLogo} alt="css" className="skill-logo"/>
            </li>
          </ul>
        </div>
        <div className="links row">
          <div className="col-xs-12 col-lg-6">
            <div className="link-button">
              <a href="https://drive.google.com/file/d/1XAuPlbpqgaMErBgkOOY-kIhPOmuDZ9pi/view?usp=sharing" target="blank">
                Resume
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className="link-button">
              <a href="#about" onClick={scrollToAbout}>
                <i className="fa fa-angle-double-right"></i>
                More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
