const notes = ['Meeting notes', 'Grocery list'];
//notes.push("Workout plan"); // add to notes by mutating notes directly
// to make react know that the state has changed one has to do it another way
const newNotes = [...notes, "Workout plan"] // can trigger re-render/re-panting of DOM
console.log(newNotes)

const newNotes2 = notes.map((note) => note === "Grocery list" ? "Shopping list" : note)
// if note=grocery list then shopping list else return the note
console.log(newNotes2)

const user = {
    name: "John Doe",
    age: 30,
};

const newUser = {
    ...user,
    age: 31,
    address: {state: "no"}
}
console.log(user);
console.log(newUser);
const {address: {state: a}} = newUser; // Get address.state from newUser
const {age: b} = newUser;
console.log(a);
console.log(newUser.address.state);
console.log(b);
console.log(newUser.age);