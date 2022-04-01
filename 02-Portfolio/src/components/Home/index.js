import './index.scss';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import LogoMain from "./Logo";
import Loader from "react-loaders";

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['b', 'd', 'u', 'l', 'r', 'h', 'm', 'a', 'n', ' ', 'S', 'a', 'b', 'e', 'r', '.'];
  const jobArray = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
  const secondTitleArray = ['P', 'H', 'P', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 5000);
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className="text-zone">
          <h1>

            <span className={`${letterClass} hi-msg`}>H</span>
            <span className={`${letterClass} _12 hi-msg`}>i,</span>

            <br/>

            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`} style={{marginRight: '15px'}}>'m </span>

            <span className={`${letterClass} _15 a-letter`}>A</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={22} /> <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />

          </h1>
          <h2>
            <AnimatedLetters letterClass={letterClass} strArray={secondTitleArray} idx={22} />
          </h2>
          <Link to="/contact" className='flat-button'><FontAwesomeIcon icon={faPaperPlane} /> Contact Me</Link>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Home;