import './index.scss';
import Loader from "react-loaders";
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPython, faPhp, faLaravel, faJs, faReact, faDailymotion } from "@fortawesome/free-brands-svg-icons";

import { faTerminal, faCode, faDatabase, faVial, faComputer, faCheck } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']} idx={15} />
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores autem delectus distinctio dolore dolorem, eligendi expedita explicabo fuga illum maiores, nobis odit quam rerum sapiente vel voluptate? Ab, necessitatibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis consequatur corporis cupiditate dolor ducimus ea iure laborum minima nisi non nostrum placeat, quasi recusandae, sapiente sint sunt temporibus veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis consequatur corporis cupiditate dolor ducimus ea iure laborum minima nisi non nostrum placeat, quasi recusandae, sapiente sint sunt temporibus veniam?</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis consequatur corporis cupiditate dolor ducimus ea iure laborum minima nisi non nostrum placeat, quasi recusandae, sapiente sint sunt temporibus veniam?</p>
        </div>
        <div className="skills-zone">
          <h3><FontAwesomeIcon icon={faCheck} /> <AnimatedLetters letterClass={letterClass} idx={15} strArray={['A', 'l', 'l', ' ', 'S', 'k', 'i', 'l', 'l', 's']} /></h3>
          <div className="skills-progress">
            <div className="skills">

              <div className="skill">
                <div className="progress">
                  <h4><FontAwesomeIcon icon={faLaravel} /> PHP - Laravel <span>87%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-1" data-width="87%"></div>
                  </div>
                </div>
              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faJs} /> JavaScript <span>79%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-2" data-width="79%"></div>
                  </div>
                </div>

              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faDatabase} /> MySQL / MongoDB <span>75%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-3" data-width="75%"></div>
                  </div>
                </div>

              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faReact} /> ReactJS <span>60%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-4" data-width="60%"></div>
                  </div>
                </div>

              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faCode} /> Problem Solving <span>54%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-5" data-width="54%"></div>
                  </div>
                </div>

              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faTerminal} /> C / C++ Lang <span>64%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-6" style={{backgroundColor: '#a38c63', width: '64%'}} data-width="64%"></div>
                  </div>
                </div>

              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faPython} /> Python <span>75%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-7" data-width="75%"></div>
                  </div>
                </div>

              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faVial} /> Jest Unit Testing <span>60%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-8" data-width="60%"></div>
                  </div>
                </div>

              </div>

              <div className="skill">

                <div className="progress">
                  <h4><FontAwesomeIcon icon={faComputer} /> Machine Learning <span>40%</span></h4>
                  <div className="container-pro">
                    <div className="limit l-9" data-width="40%"></div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
}

export default Skills