import './styles/style.css';
import { SubHead } from './styles/StyledComponents';

const ViewBox = () => {
    return (
        <div className="viewbox">
            <div className="viewFlexContainer">
                <div>
                    <SubHead> Image </SubHead>
                    <p className='content-para'> Hello world </p>
                </div>
                <div>
                    <SubHead> Extracted Data </SubHead>
                    <p className='content-para'> Data here </p>
                </div>
            </div>
        </div>
    );
}
 
export default ViewBox;