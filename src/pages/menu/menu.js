import Box from '../../components/box';
import { useState,useEffect } from 'react';
import './style.css';
import repository from '../../images/repository.gif';
import users from '../../images/users.gif';
import { CSSTransition } from 'react-transition-group'
// Menu page

function Menu() {
  const [showText, setShowText] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => { //Here load the animations
    document.title = 'Criterio de búsqueda';
    setTimeout(() => {
      setShowText(true)
    }, "500")
  
    setTimeout(() => {
      setShowOptions(true)
    }, "1500")
  },[])

  return (
    <div className="headerMenu">
      <CSSTransition timeout={500} in={showText} classNames="text" unmountOnExit>
        <p><u>Selecciona criterio de búsqueda</u></p>
      </CSSTransition>
      <div className='containerBox'>
        <CSSTransition timeout={500} in={showOptions} classNames="option" link={'/searchUser'} unmountOnExit>
          <Box title={'Buscar usuarios'} detail={'Buscar usuarios en la base de datos de github'} image={users} />
        </CSSTransition>
        <CSSTransition timeout={500} in={showOptions} classNames="option" link={'/searchReposity'} unmountOnExit>
          <Box title={'Buscar repositorios'} detail={'Buscar los repositorios vinculados a los usuarios'} image={repository} />
        </CSSTransition>
      </div>
    </div>
  );
}

export default Menu;