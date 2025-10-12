import {useEffect, useState} from 'react';

const LifecycleLogger = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    //componentDidMount
    useEffect(() => {
        console.log('LifecycleLogger mounted');
        return () => {
            //componentWillUnmount
            console.log('LifecycleLogger unmounted');
        };
    }, []);
    //componentDidUpdate
    useEffect(() => {
        if (count > 0) {
            console.log('LifecycleLogger updated - count changed:', count);
        }
    }, [count]);

    return (
    <div className="logger-container">
        <h2>Lifecycle Logger (functional component)</h2>
        <p>Count: {count}</p>
        <button 
            className='secondary-btn' 
            onClick={ incrementCount }
        >
            Update
        </button>
    </div>
    )


};

export default LifecycleLogger;