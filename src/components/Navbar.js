import React, { useLayoutEffect, useState } from 'react';
import '../style/navbar.scss';


function Navbar() {
  const [home, setHome] = useState({ active: false, pos: 0 });
  const [about, setAbout] = useState({ active: false, pos: 0 });
  const [projects, setProjects] = useState({ active: false, pos: 0 });
  const [contact, setContact] = useState({ active: false, pos: 0 });
  const [navbar, setNavbar] = useState({ active: false, pos: 0 })

  const handleScroll = () => {
    const winPos = window.scrollY;

    if (winPos < about.pos) {
      setHome({ ...home, active: true });
    } else {
      setHome({ ...home, active: false });
    }

    if (winPos > about.pos && winPos < projects.pos) {
      setAbout({ ...about, active: true });
    } else {
      setAbout({ ...about, active: false });
    }

    if (winPos > projects.pos && winPos < contact.pos) {
      setProjects({ ...projects, active: true });
    } else {
      setProjects({ ...projects, active: false });
    }

    if (winPos > contact.pos) {
      setContact({ ...contact, active: true });
    } else {
      setContact({ ...contact, active: false });
    }

    if (winPos >= navbar.pos) {
      setNavbar({ ...navbar, active: true });
    } else {
      setNavbar({ ...navbar, active: false });
    }

  }

  useLayoutEffect(() => {
    const aboutPos = document.getElementById('about');
    setAbout({ ...about, pos: aboutPos.offsetTop - 30 });

    const projPos = document.getElementById('projects');
    setProjects({ ...projects, pos: projPos.offsetTop - 30 });

    const contPos = document.getElementById('contact');
    setContact({ ...contact, pos: contPos.offsetTop - 30 });

    const navPos = document.getElementById('nav');
    setNavbar({ ...navbar, pos: navPos.offsetTop })

    return () => {}
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  const scrollToPage = (e) => {
    e.preventDefault();
    const elem = (e.currentTarget.textContent);
    const page = document.getElementById(elem);
    page.scrollIntoView({ behavior: 'smooth'});
  }

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={`navbar ${navbar.active ? "sticky" : ""}`} id="nav">
      <div className="nav-left">
        <p className="nav-brand">MD</p>
      </div>
      <div className="nav-right">
        <ul>
          <li className={ home.active ? "active" : "" } onClick={scrollToTop}>home</li>
          <li className={ about.active ? "active" : "" } onClick={scrollToPage}>about</li>
          <li className={ projects.active ? "active" : "" } onClick={scrollToPage}>projects</li>
          <li className={ contact.active ? "active" : "" } onClick={scrollToPage}>contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
