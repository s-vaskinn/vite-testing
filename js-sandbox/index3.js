const number = 4;
let message;

if (number % 2 === 0 ) {
    message = 'Even number';
} else {
    message = 'Odd number';
}

console.log(message)

const message2 = number % 2 === 0 ? 'Even number' : 'Odd number';
// if statement ? {return if true} : {return if false}
console.log(message2)

const note = {
    title: "Meeting notes",
    content: "Discuss project roadmap",
    timestamp: Date.now(),
    isPinned: false
}

const noteText = `
    Title: ${note.title}
    Status: ${note.isPinned ? 'Pinned note' : 'Regular note'}
    Last edited: ${new Date(note.timestamp).toLocaleString()}
`
console.log(noteText);

// Another way to if
console.log(false && 'Hello 1')
console.log(true && 'Hello 2')

const isLoggedIn = true;

function showWelcome() {
    return isLoggedIn && "Welcome user";
}

console.log(showWelcome())