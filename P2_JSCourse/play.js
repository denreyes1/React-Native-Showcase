const hobbies = ["sports", "cooking"];
const copiedHobbiesArray = [...hobbies, ...['traveling']];
console.log(copiedHobbiesArray);

const person = {name: 'Den', age: 29};
const copiedPerson = {...person, ...{hobby: "traveling"}};

console.log(copiedPerson);

const toArray = (...args) => args;
console.log(toArray(1,2,3));