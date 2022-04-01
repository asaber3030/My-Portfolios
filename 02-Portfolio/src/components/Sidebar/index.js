import './index.scss';
import {Link, NavLink} from "react-router-dom";
import Logo from '../../assets/images/02.png';
import {faDownload, faEnvelope, faGraduationCap, faHome, faListCheck, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";


const Sidebar = () => {

  const navRef = useRef();
  const linkRef = useRef().current;

  const nav = document.getElementById('navbar-links');
  const handleNavBar = () => {
    navRef.current.classList.toggle('active-nav');
  };
  const hideNavbar = () => {
    navRef.current.classList.remove('active-nav');
  };

  return (
    <div className="navbar">
      <div className='logo' to='/'>
        <Link to='/'>
          <img src={Logo} alt="Logo"/>
          <h4 className='my-name'>ASaber</h4>
        </Link>
        <FontAwesomeIcon onClick={handleNavBar} icon={faBars} />
      </div>
      <nav id='navbar-links' className='navbar-links-class' ref={navRef}>
        <NavLink ref={linkRef} onClick={hideNavbar} exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink ref={linkRef} onClick={hideNavbar} exact="true" className="about-link" activeClassName="active" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink ref={linkRef} onClick={hideNavbar} exact="true" className="contact-link" activeClassName="active" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink ref={linkRef} onClick={hideNavbar} exact="true" className="projects-link" activeClassName="active" to="/projects">
          <FontAwesomeIcon icon={faListCheck} color="#4d4d4e" />
        </NavLink>

        <NavLink ref={linkRef} onClick={hideNavbar} exact="true" className="skills-link" activeClassName="active" to="/skills">
          <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
        </NavLink>

      </nav>
      <ul className='social-links'>
        <li><a rel='noreferrer' target="_blank" href="https://www.facebook.com/asaber.25/"><FontAwesomeIcon icon={faFacebook}/></a></li>
        <li><a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/abdulrahman-saber/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li><a rel='noreferrer' target="_blank" href="https://github.com/asaber3030"><FontAwesomeIcon icon={faGithub}/></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;