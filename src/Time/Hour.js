import './HMS.css';
import {toBinaryForHMSD, toBinaryForLSD} from '../helpers';

function Hour(props) {
    let msd = Math.floor(props.hour / 10);
    let lsd = props.hour % 10;

    let binaryMSD = toBinaryForHMSD(msd);
    let binaryLSD = toBinaryForLSD(lsd);

    return (
        <div className="Hour">
            <div className="HourHeader">
                <h1>H</h1>
                <h1>H</h1>
            </div>
            <div className="HourDisplay">
                <div className="MSDH">
                    {binaryMSD.map(digit => (digit == 1) ?<div className="circle light" ></div> : <div className="circle dark" ></div>)} 
                </div>
                <div className="LSD">
                    {binaryLSD.map(digit => (digit == 1) ?<div className="circle light" ></div> : <div className="circle dark" ></div>)} 
                </div>
            </div>
        </div>
    );
}
  
export default Hour;
  