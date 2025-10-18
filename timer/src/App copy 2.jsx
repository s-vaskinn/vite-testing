import {useState, useRef} from 'react';

const App = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      // clear the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // Start the timer
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  };

  return (
  <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
    <h2 className='text-4xl font-semibold mb-4'> Simple timer: {time} </h2>
    <button 
      className='mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3'
      onClick={toggleTimer}
    >
      {isRunning ? 'Pause' : 'Start'}
    </button>
    <button 
      className='mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
      onClick={resetTimer}
    >
      Reset
    </button>
  </div>
  );
};

export default App;
