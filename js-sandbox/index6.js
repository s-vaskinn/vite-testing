const user = {
    name: "Brad",
};

console.log(user.address?.city);

let value = null;
let result = value ?? 'Default value'; // if else
console.log(result)

console.log(user.address?.city ?? 'Unknown')