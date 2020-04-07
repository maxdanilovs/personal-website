import React from 'react';
import '../style/projects.scss';

function ProjectItem({name, image, link, git, description, tech, date}) {
  const techUsed = () => {
    let result = [];
    tech.forEach(t => {
      result.push(<li>{t}</li>)
    })
    return result;
  }

  return (
    <div className="project-card">
      <div className="card-left">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-front">
              <img src={image} alt="" className="card-image"/>
            </div>
            <div className="flip-back">
              <a href={link} target="blank">Website</a>
              <a href={git} target="blank">Code</a>
            </div>
          </div>
        </div>
        <ul className="tech">{techUsed()}</ul>
      </div>
      <div className="card-right">
        <h2>{name}</h2>
        <hr/>
        <p className="text-left">{description}</p>
        <h4>{date}</h4>
      </div>
    </div>
  )
}

export default ProjectItem;
