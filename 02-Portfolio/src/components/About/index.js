import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus esse id ipsam magnam maxime officia rerum sapiente tempore! Eligendi, laudantium officiis pariatur quaerat rem sit tempora tempore vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus esse id ipsam magnam maxime officia rerum sapiente tempore! Eligendi, laudantium officiis pariatur quaerat rem sit tempora tempore vero!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus esse id ipsam magnam maxime officia rerum sapiente tempore! Eligendi, laudantium officiis pariatur quaerat rem sit tempora tempore vero!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus esse id ipsam magnam maxime officia rerum sapiente tempore! Eligendi, laudantium officiis pariatur quaerat rem sit tempora tempore vero!</p>
          <NavLink to='/skills' className='flat-button'>
            <FontAwesomeIcon icon={faGraduationCap} /> Skills
          </NavLink>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};


export default About