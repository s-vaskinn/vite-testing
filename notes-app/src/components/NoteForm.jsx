import {useState} from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

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
        <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
        />
        <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
                { value: 'High', label: 'High' },
                { value: 'Medium', label: 'Medium' },
                { value: 'Low', label: 'Low' }
            ]}
        />
        <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
                { value: 'Work', label: 'Work' },
                { value: 'Personal', label: 'Personal' },
                { value: 'Ideas', label: 'Ideas' }
            ]}
        />
        <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
        />
        <button className="w-full bg-purple-500 text-white py-2 rounded rounded-lg cursor-pointer hover:bg-purple-600">
            Add Note
        </button>
        </form>
    )}
    </>);
};

export default NoteForm;