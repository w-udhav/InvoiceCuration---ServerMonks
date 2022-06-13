import { ButtonS1 } from "./styles/StyledComponents";

const Button = (props) => {
    return (
        <div>
            <ButtonS1>
                <span className="front"> {props.title} </span>
            </ButtonS1>
        </div>
    );
}
 
export default Button;