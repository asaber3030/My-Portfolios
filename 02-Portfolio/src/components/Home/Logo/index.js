import './index.scss';
import Logo from '../../../assets/images/01.png';
import {useRef} from "react";

const LogoMain = () => {

  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className='logo-container'>
      <img src={Logo} alt="Logo" className='solid-logo' />
    </div>
  );
};

export default LogoMain;