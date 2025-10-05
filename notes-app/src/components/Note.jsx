const Note = ({ note, deleteNote }) => {
    return (
        <div key={note.id} className="p-4 border rounded-lg bg-white shadow-md border-l-4"
        style={{ borderColor: note.priority === 'High' ? "red" : note.priority === 'Medium' ? "orange" : "green" }}
        >
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p className="text-sm" style={{ color: note.priority === 'High' ? "red" : note.priority === 'Medium' ? "orange" : "green" }}><strong>Priority:</strong> {note.priority}</p>
            <p className="text-sm text-black-600"><strong>Category:</strong> {note.category}</p>
            <p className="mt-2"> {note.description} </p>
        
        <button 
            className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
            onClick={() => deleteNote(note.id)}
        >
            Delete
        </button>
        </div>
    )
};

export default Note;