import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
//Box component used in menu page

const Box = (props) => {
  return (
        <div>
            <div className="card card-width">
                <img class="card-img-top image" alt="Box" src={props.image}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.detail}</p>
                    <a href={props.link} class="btn btn-success">Buscar</a>
                </div>
            </div>
        </div>
    )
};

export default Box;