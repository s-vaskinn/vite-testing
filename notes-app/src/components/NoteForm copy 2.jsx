import {useState} from 'react';
import TextInput from './inputs/TextInput';

const NoteForm = ({ notes, setNotes }) => {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleChange = (e) => {
        //console.log(e.target.name, e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if not empty
        if (!formData.title || !formData.description) return;
        // Create a new note object
        const newNote = {id:Date.now(), ...formData};
        // Add the new note to the state
        setNotes([newNote, ...notes]); //adding new note in front of the array
        // Reset form data
        setFormData({
            title: '',
            priority: 'Medium',
            category: 'Work',
            description: ''
        });
    }

    return (
    <>
    {/* Toggle Button */}
    <button className="w-full bg-gray border border-gray-300 purple-text-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: boarder-purple-300 transation mb-4" 
    onClick={() => setIsFormVisible(!isFormVisible)}
    >
        {isFormVisible ? 'Hide Form' : 'Add New Note'}
    </button>

    {/* form */}
    {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">Title</label>
            <input 
                name="title"
                type="text" 
                className="w-full p-2 border rounded-lg"
                value={formData.title}
                onChange={handleChange}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">Priority</label>
            <select 
                name="priority"
                type="text" 
                className="w-full p-2 border rounded-lg"
                value={formData.priority}
                onChange={handleChange}
            >
                <option value="High"> High</option>
                <option value="Medium"> Medium</option>
                <option value="Low"> Low</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">Category</label>
            <select 
                name="category"
                type="text" 
                className="w-full p-2 border rounded-lg"
                value={formData.category}
                onChange={handleChange}
            >
                <option value="Work"> Work</option>
                <option value="Personal"> Personal</option>
                <option value="Ideas"> Ideas</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">Description</label>
            <textarea 
                name="description"
                type="text" 
                className="w-full p-2 border rounded-lg"
                value={formData.description}
                onChange={handleChange}
            ></textarea>
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded rounded-lg cursor-pointer hover:bg-purple-600">
            Add Note
        </button>
        </form>
    )}
    </>);
};

export default NoteForm;