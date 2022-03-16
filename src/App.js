
import './App.css';
import React,{useState,useRef,useEffect} from 'react'
function App() {
const [timerDay, settimerDay] = useState('00');
const [timerHour, settimerHour] = useState('00');
const [timermin, settimermin] = useState('00');
const [timesecond, settimesecond] = useState('00');

let interval = useRef();
const startTimer = ()=>{
  const countdownDate = new Date('May 30, 2022  00:00:00').getTime();
  interval = setInterval(()=>{
    const now = new Date().getTime();
    const distance = countdownDate - now
    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);
    if (distance <0) {
      // we need to stop the timer
      clearInterval(interval.current)
    }else{
      // timer should be updated
       settimerDay(days)
       settimerHour(hours)
       settimermin(minutes)
       settimesecond(seconds)
    }
  },1000)
}

useEffect(() => {
  
  startTimer();
  return ()=>{
    clearInterval(interval.current)
  }
})
  return (
  <section className='timer-container'>
      <section className="timer">
        <div>
          <span className='mdi mdi-calendar-clock timer-icon'></span>
          <h2>countdown Timer</h2>
        </div>
        <div>
          <seciton>
            <p>{timerDay}</p>
            <p><small>Days</small></p>
          </seciton>
          <span>:</span>
          <seciton>
            <p>{timerHour}</p>
            <p><small>Hours</small></p>
          </seciton>
          <span>:</span>
          <seciton>
            <p>{timermin}</p>
            <p><small>Minutes</small></p>
          </seciton>
          <span>:</span>
          <seciton>
            <p>{timesecond}</p>
            <p><small>Seconds</small></p>
          </seciton>
        </div>
      </section>
  </section>
  );
}
export default App;
