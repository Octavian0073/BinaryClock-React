import './HMS.css';
import {toBinaryForMSMSD, toBinaryForLSD} from '../helpers';

function Sec(props) {
    let msd = Math.floor(props.sec / 10);
    let lsd = props.sec % 10;

    let binaryMSD = toBinaryForMSMSD(msd);
    let binaryLSD = toBinaryForLSD(lsd);

    return (
        <div className="Sec">
            <div className="SecHeader">
                <h1>S</h1>
                <h1>S</h1>
            </div>
            <div className="SecDisplay">
                <div className="MSD">
                    {binaryMSD.map(digit => (digit == 1) ?<div className="circle light" ></div> : <div className="circle dark" ></div>)} 
                </div>
                <div className="LSD">
                    {binaryLSD.map(digit => (digit == 1) ?<div className="circle light" ></div> : <div className="circle dark" ></div>)} 
                </div>
            </div>
        </div>
    );
}

export default Sec;
