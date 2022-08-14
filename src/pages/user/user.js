import Search from '../../components/search';
import Card from '../../components/card';
import { useState,useEffect } from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import API from '../../api';
//Search user page

function User() {
  const [show, setShow] = useState({
                                    search: false,
                                    cardUser: false,
                                  });                               
  const [searchValue, setsearchValue] = useState('');
  const [user, setUser] = useState(null);
  
  useEffect((show) => { //Here load the animations
    document.title = 'Usuarios';
    setTimeout(() => {
      setShow({
        ...show,
        search: true
      })
    }, "500")
  },[])

  const onClick=async()=> {
    const search = {
      q: searchValue
    };
    
    await API.get(`search/users`,{params: search})
      .then(res => {
        setUser(res.data.items);
        setTimeout(() => {
          setShow({
            ...show,
            cardUser: true
          })
        }, "5000")
      })
      .catch((error) => {
        alert('No se encontro ninguna coincidencia.')
      })
  }

  const handleChange = (e) => {
    setsearchValue(e.target.value);
  };

  return (
    <div className="headerSearch">
        <p><u>Ingrese nombre de usuario en el buscador</u></p>
        <CSSTransition timeout={500} in={show.search} classNames="search" unmountOnExit>
          <Search onClick={()=>onClick()} 
          value={searchValue} 
          onChange={handleChange}
          text={'Ingrese nombre de usuario'}/>
        </CSSTransition>
        <TransitionGroup>
          {(user) ?
            user.map((user) =>
              <CSSTransition timeout={1000} in={show.cardUser} classNames="card-user" unmountOnExit>
                <Card 
                title={user.login}
                textButton={'Ver perfil'}
                link={user.html_url}
                image={user.avatar_url} />
              </CSSTransition>
            )
        :null
        } 
        </TransitionGroup>
    </div>
  );
}

export default User;