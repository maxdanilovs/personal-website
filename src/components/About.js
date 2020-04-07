import React from 'react';
import '../style/about.scss';
import MyImage from '../images/me2.jpg';
import Skill from './Skill';

function About() {
  return (
    <div className="about page" id="about">
      <div className="container">
        <h1 className="page-header">ABOUT</h1>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <div className="info">
              <img className="my-image" src={MyImage} alt=""/>
              <h3>Max Danilovs</h3>
              <h4>36 years old</h4>
              <br/>
              <h4>Self-taught Programmer</h4>
              <h4>with IT Engineering background</h4>
              <br/>
              <ul>
                <li>Responsible</li>
                <li>Positive and friendly</li>
                <li>Inquisitive</li>
                <li>Passionate about coding</li>
                <li>Technology enthusiast</li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className="skills">
              <h4 className="text-center">Back-end</h4>
              <hr/>
              <Skill name={'Ruby'} rating={4}/>
              <Skill name={'Ruby on Rails'} rating={4}/>
              <Skill name={'Active Record'} rating={4}/>
              <Skill name={'JavaScript'} rating={4}/>
              <Skill name={'NodeJS/Express'} rating={3}/>
              <Skill name={'SQL'} rating={3}/>
              <Skill name={'NoSQL'} rating={3}/>
              <hr/>
              <h4 className="text-center">Front-end</h4>
              <hr/>
              <Skill name={'React'} rating={4}/>
              <Skill name={'JQuery'} rating={3}/>
              <Skill name={'HTML'} rating={4}/>
              <Skill name={'CSS/SASS'} rating={4}/>
              <Skill name={'UX Design'} rating={4}/>
              <Skill name={'Graphics Design'} rating={2}/>
              <hr/>
              <div className="codewars">
              <h4 className="text-center">Codewars</h4>
                <a href="https://www.codewars.com/users/MaxDanilovs" target="blank">
                  <img src="https://www.codewars.com/users/MaxDanilovs/badges/large" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
