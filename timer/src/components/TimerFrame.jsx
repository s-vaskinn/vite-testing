import Timer from './Timer';

const TimerFrame = () => {
    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Timer Frame</h2>
            <p className="text-gray-700">This is a placeholder for the Timer Frame component.</p>
            <Timer />
        </div>
    );
}

export default TimerFrame;