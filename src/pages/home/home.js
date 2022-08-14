import logo from '../../images/logo.png';
import { useState,useEffect } from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from 'react-transition-group'
//Home Page

function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => { //Here load the animations
    document.title = 'Principal';
    setTimeout(() => {
      setShowLogo(true)
    }, "500")
  
    setTimeout(() => {
      setShowText(true)
    }, "1500")
  
    setTimeout(() => {
      window.location='menu'
    }, "3500")
  },[])

  return (
    <div className="infoContainer">
      <header className="header">
        <CSSTransition timeout={500} in={showLogo} classNames="example" unmountOnExit>
          <img src={logo} className="logo" alt="logo" />
        </CSSTransition>
        <CSSTransition timeout={1000} in={showText} classNames="text" unmountOnExit>
          <p className='welcome'>
            ¡Bienvenido al buscador de repositorios de zebrands!
          </p>
        </CSSTransition>
      </header>
    </div>
  );
}

export default Home;