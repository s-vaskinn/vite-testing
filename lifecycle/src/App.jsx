import { useState } from 'react'
import LifecycleLogger from './components/LifecycleLogger';

function App() {
  const [showLogger, setShowLogger] = useState(false);

  return (
    <div className="container"> 
      <h2>React Lifecycle Methods</h2>
      { /* toggle lifecicle logger */}
      <button
        className='primary-btn'
        onClick={() => setShowLogger(!showLogger)}
      >
      {showLogger ? 'Unmount logger' : 'Mount logger'}
      </button>
      { showLogger && <LifecycleLogger message="Hello from app" /> }
    </div>
  )
};

export default App
