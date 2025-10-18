import { useRef, useState, useEffect } from "react";
import TimerControls from "./TimerControls";

const Timer = () => {
    const timerRef = useRef(null);
    const [time, setTime] = useState(() => {
        return Number(localStorage.getItem('time') || 0);
    });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        localStorage.setItem('time', time);
    }, [time]);
    
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
        localStorage.removeItem('time');
    };

    const submit = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
        console.log(inputRef.current.value);
        inputRef.current.style.backgroundColor = 'red';
        inputRef.current.style.color = 'white';
        inputRef.setAttribute('placeholder', 'Updated...');
    }
    
    return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
        <h2 className='text-4xl font-semibold mb-4'> Simple timer: {time} </h2>
        <TimerControls 
            isRunning={isRunning} 
            onToggle={toggleTimer} 
            onReset={resetTimer} 
        />
    </div>
    );
};

export default Timer;