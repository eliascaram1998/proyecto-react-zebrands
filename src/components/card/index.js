import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
// Card component

const Card = (props) => {
  return (
        <div>
            <div className="card card-user-width">
                <img class="card-img-top image" alt="Card" src={props.image}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.detail}</p>
                    <a href={props.link} target="_blank" rel="noreferrer" class="btn btn-success">{props.textButton}</a>
                </div>
            </div>
        </div>
    )
};

export default Card;