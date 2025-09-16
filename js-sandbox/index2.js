const name = 'John';
const age = 30;

//const greetings = 'Hello my name is ' + name + ' and I am ' + age + " years old.";
const greetings = `Hello my name is ${name} and I am ${age} yeras old.`

console.log(greetings)

const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}

const note = {
    title: 'Discuss project',
    timestamp: Date.now(),
};

console.log(`Last editet: ${formatDate(note.timestamp)}`);