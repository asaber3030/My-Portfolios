import './index.scss';
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";

import {useEffect, useRef, useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane, faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import emailjs from "@emailjs/browser";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hs24qdk', 'template_kxncs65', refForm.current, 'X3Qr_Q546rpv4xYqu').then(() => {
      alert('E-mail Sent');
      window.location.reload(false);
    }, () => {
      alert('Failed');
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} idx={15} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} />
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ex nisi quae sit! Aliquid animi architecto at eaque magni nulla ut. Asperiores odit quasi quia repellendus sit tenetur, totam velit?</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <div className="d-flex">
                  <li className='half'>
                    <input type="text" name='name' placeholder='Name' required />
                  </li>
                  <li className='half'>
                    <input type="email" name='email' placeholder='E-mail Address' required />
                  </li>
                </div>
                <li className='half' style={{marginLeft: '0 !important'}}>
                  <input type="text" name='subject' placeholder='Subject' required />
                </li>
                <li className='half'>
                  <textarea name="message" placeholder="Message" required></textarea>
                </li>
                <li>
                  <button type='submit' className='flat-button'><FontAwesomeIcon icon={faPaperPlane} /> Submit</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          <h5><FontAwesomeIcon icon={faUser} /> Abdulrahman Saber</h5>
          <h5><FontAwesomeIcon icon={faEnvelope} /> abdulrahman.saber.120@gmail.com</h5>
          <h5><FontAwesomeIcon icon={faPaperPlane} /> Egypt, Zagizag</h5>
          <h5><FontAwesomeIcon icon={faPhone} /> +20 112 352 512 3</h5>
        </div>
      </div>

      <Loader type='pacman' />
    </>
  );
};

export default Contact