import {useRef} from 'react';

const App = () => {
  const inputRef = useRef(null);
  //console.log(inputRef);

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
      <h2 className='text-2xl font-bold mb-4'> Use ref example </h2>
      <input
        type="text"
        placeholder='Type something...'
        className='w-full p-2 border border-gray-300 rounded-lg'
        ref={inputRef}
      ></input>
      
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
};

export default App;