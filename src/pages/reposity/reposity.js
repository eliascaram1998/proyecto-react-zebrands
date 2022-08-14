import Search from '../../components/search';
import Card from '../../components/card';
import { useState,useEffect } from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import API from '../../api';
//Search reposity page

function Reposity() {
  const [show, setShow] = useState({
                                    search: false,
                                    cardUser: false,
                                  });                               
  const [searchValue, setsearchValue] = useState('');
  const [repositories, setRepositories] = useState(null);
  
  useEffect((show) => {
    document.title = 'Repositorios'; //Title of the page
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

    await API.get(`search/repositories`,{params: search})
      .then(res => {
        setRepositories(res.data.items);
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
        <p><u>Ingrese nombre de el repositorio en el buscador</u></p>
        <CSSTransition timeout={500} in={show.search} classNames="search" unmountOnExit>
          <Search onClick={()=>onClick()} 
          value={searchValue} 
          onChange={handleChange}
          text={'Ingrese nombre de usuario'}/>
        </CSSTransition>
        <TransitionGroup>
        {(repositories) ?
          repositories.map((repositories) =>
          <CSSTransition timeout={1000} in={show.cardUser} classNames="card-user" unmountOnExit>
            <Card 
            title={repositories.name}
            detail={'Dueño '+ repositories.owner.login}
            textButton={'Ver repositorio'}
            link={repositories.html_url}
            image={repositories.owner.avatar_url} />
          </CSSTransition>
          )
        :null
        } 
        </TransitionGroup>
    </div>
  );
}

export default Reposity;