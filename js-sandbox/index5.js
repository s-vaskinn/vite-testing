const notes = [
    { title: "Metting notes", content: "Discuss project roadmap", isPinned: true },
    { title: "Grocery List", content: "Buy milk, eggs, bread", isPinned: false} ,
    { title: "Workout plan", content: "Push day: Bench, Shoulder press" },
    { title: "Recipe Ideas", content: "Pasta, Salad, Tacos", isPinned: true }    
];

const noteTitles = notes.map((i,index) => `${index}. ${i.title}`);
console.log(noteTitles);

const pinnedNotes = notes.filter((note) => note.isPinned);
console.log(pinnedNotes);

const pinnedNotesMap = notes
                     .filter((note) => note.isPinned)
                     .map((note) => note.title);
console.log(pinnedNotesMap);

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((total, number) => total + number, 0); // start at 0
console.log(sum)

const totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);
console.log(totalCharacters)

// for loop in js
notes.forEach((note) => console.log(note.title))