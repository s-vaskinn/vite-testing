import {useEffect, useRef} from 'react';

const TimerControls = ({ isRunning, onToggle, onReset }) => {
    const startButtonRef = useRef(null);
    useEffect(() => {
        if (startButtonRef.current) {
            startButtonRef.current.focus();
        }
    }, []);
    return (
        <div>
        <button 
            className='mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3'
            onClick={onToggle}
            ref={startButtonRef}
        >
            {isRunning ? 'Pause' : 'Start'}
        </button>
        <button 
            className='mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
            onClick={onReset}
        >
        Reset
        </button>
        </div>
    );
};

export default TimerControls;