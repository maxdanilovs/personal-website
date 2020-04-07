import React from 'react';
import '../style/projects.scss';
import ProjectItem from './ProjectItem';
import Scheduler from '../images/scheduler_wall.jpeg';
import Minesweeper from '../images/minesweeper.png';

function Projects() {
  return (
    <div className="projects page" id="projects">
      <h1 className="page-header">PROJECTS</h1>
      <div className="container">
        <ProjectItem
          name="Scheduler"
          image={Scheduler}
          link="https://max-rails-react-scheduler.herokuapp.com/"
          git="https://github.com/maxdanilovs/rails-react-scheduler"
          description="Scheduler web application is an improved 'Todo app' made for skill demonstration purposes"
          tech={["Ruby on Rails", "ReactJS", "Postgresql/ActiveRecord"]}
          date="February 2020" />
          <hr className="projects-hr"/>
        <ProjectItem
          name="Minesweeper"
          image={Minesweeper}
          link="https://max-mern-minesweeper.herokuapp.com/"
          git="https://github.com/maxdanilovs/node-react-minesweeper"
          description="Windows OS classic game. All the logic is in the backend to avoid hacking"
          tech={["Node/Express", "ReactJS", "MongoDB/Mongoose"]}
          date="April 2020" />
      </div>
    </div>
  );
}

export default Projects;
