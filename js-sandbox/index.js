/*
function getRectangleArea(widht, height) {
    return widht * height;
}
*/

const getRectangleArea = (width, height) => width * height;
    //return width * height -> explisit return. above is implisit.
console.log(getRectangleArea(5,10));

const numbers = [1,2,3,4,5];
/*
const double = numbers.map(
    function (number){
        return number * 2;
    }
);
*/
const double = numbers.map((number) => number * 2);

console.log(double)

regular();
//arrow();  // will not work

function regular() {
    console.log('Regular')
}

const arrow = () => console.log('Arrow')

arrow(); // will work
regular(); // will work

console.log("---------------------")

const person = {
    name: 'Brad',
    sayHelloRegular: function () {
        console.log('Regular: ', this.name);
        console.log('Regular object:', this);
    },
    sayHelloArrow: () => console.log('Arrow: ', this.name),
    sayHelloArrowObj: () => console.log('Arrow object: ', this),
}

person.sayHelloArrow();
person.sayHelloArrowObj();
person.sayHelloRegular();