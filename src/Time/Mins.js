import './HMS.css';
import {toBinaryForMSMSD, toBinaryForLSD} from '../helpers';

function Mins(props) {
  let msd = Math.floor(props.mins / 10);
  let lsd = props.mins % 10;

  let binaryMSD = toBinaryForMSMSD(msd);
  let binaryLSD = toBinaryForLSD(lsd);

console.log(binaryLSD)
  return (
    <div className="Mins">
      <div className="MinsHeader">
        <h1>M</h1>
        <h1>M</h1>
      </div>
      <div className="MinsDisplay">
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

export default Mins;
