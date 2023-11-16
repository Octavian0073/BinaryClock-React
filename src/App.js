import { useEffect, useState } from 'react';
import './App.css';
import Hour from './Time/Hour';
import Mins from './Time/Mins';
import Sec from './Time/Sec';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  });
  return (
    <div className="App">
      <Hour hour = {time.getHours()}/>
      <Mins mins = {time.getMinutes()}/>
      <Sec sec = {time.getSeconds()}/>
    </div>
  );
}

export default App;
