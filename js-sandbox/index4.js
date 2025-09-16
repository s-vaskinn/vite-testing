const notes = [
    { title: "Metting notes", content: "Discuss project roadmap" },
    { title: "Grocery List", content: "Buy milk, eggs, bread"} ,
    { title: "Workout plan", content: "Push day: Bench, Shoulder press" },
    { title: "Recipe Ideas", content: "Pasta, Salad, Tacos" }    
]

console.log(notes);

const [a,b, ...c] = notes;
// ... is the rest operator. ...c asigns the rest of the array to variable c

console.log(a);
console.log(b.title);
console.log(c);

const note = {
    title: "Meeting notes",
    content: "Dicuss project roadmap",
    isPinned: true,
};

const {title, title: newTitleName, isPinned} = note; // pulls out title from note
console.log(newTitleName);
console.log(title);
console.log(isPinned); // has to be pulled to work

function NoteCard( {title} ) {
    console.log("NoteCard: "+ title)
}

NoteCard( notes[1] )

const user = {
    name: "Ben",
    address: {city: "Boston", state: "MA"},
    hobbies: ["movies", "sports", "music"]
};

// getting name and city as a variable
const {
    name, 
    address: { city }, 
    hobbies: [a1, ...b1],
} = user; 
console.log(city);
console.log(name);
//console.log(hobbies);
console.log(a1);
console.log(b1);

