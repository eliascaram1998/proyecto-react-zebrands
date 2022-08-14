import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
//Component search button

const Search = (props) => {
    const {text, onClick, value, onChange}=props;

    return (
        <div>
            <InputGroup className="col-6">
                <FormControl
                    onChange={onChange}
                    placeholder={text}
                    value={value}
                />
                <Button onClick={onClick} variant="success" id="button-addon2">
                    Buscar
                </Button>
            </InputGroup>
        </div>
    )
};

export default Search;