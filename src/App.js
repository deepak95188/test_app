import React from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';

function App() {
  const [inputValues, setInputValues] = React.useState({
    minute: 0,
    second: 0
  });

  const [isStarted, setIsStarted] = React.useState(false)

  const [timerValue, setTimerValue] = React.useState({
    minute: 0,
    seconds: 0
  })

  const [totalSeconds, setTotalSeconds] = React.useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: parseInt(value)
    })
  }


  const getTime = () => {
    let minute = 0,
      second = 0;

    minute = parseInt((totalSeconds / 60).toString().split('.')[0]);
    second = totalSeconds % 60;

    return `${minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`
  }




  const startTimer = () => {  
    let currentVal = (inputValues.minute * 60) + inputValues.second;
    let newVal = currentVal;
    setTotalSeconds(newVal)
    setIsStarted(true)
  }


  const startPause = () => {
    setIsStarted(!isStarted)
  }


  const resetTimer = () => {
    let currentVal = (inputValues.minute * 60) + inputValues.second;
    let newVal = totalSeconds + currentVal;
    setTotalSeconds(newVal)
    setIsStarted(true)
  }

  React.useEffect(() => {
    let timeInterval = setInterval(() => {
      if (isStarted) {
        setTotalSeconds(totalSeconds - 1)
      }
    }, 1000);
    return ()=> clearInterval(timeInterval)
  }, [totalSeconds,isStarted])


  return (
    <div className="App">
      <Input handleChange={handleChange} name="minute" outline="none" value={inputValues.minute} />
      <Input handleChange={handleChange} name="second" outline="none" value={inputValues.second} />
      <Button color="black" backgroundColor='white' handleClick={() => startTimer()} label="Start" />
      <Button color="black" backgroundColor='white' handleClick={() => startPause()} label="Pause/Resume" />
      <Button color="black" backgroundColor='white' handleClick={() => resetTimer()} label="Reset" />

      <>{getTime()}</>
    </div>
  );
}

export default App;
