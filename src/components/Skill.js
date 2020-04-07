import React from 'react';
import '../style/skill.scss';

function Skill({name, rating}) {
  const circles = (r) => {
    let rate = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < rating) {
        rate.push(<li><span className="circle full"></span></li>)
      } else {
        rate.push(<li><span className="circle"></span></li>)
      }
    }
    return rate;
  }

  return (
    <div className="skill">
      <div className="skill-name">
        <p>{name}</p>
      </div>
      <div className="skill-rating">
        <ul className="rating">
          {circles(rating)}
        </ul>
      </div>
    </div>
  )
}

export default Skill;
