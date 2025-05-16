const person = {name: 'Den', age: 29, occupation: 'Developer'};
// const name = person.name;
// const age = person.age;
// const occupation = person.occupation;

// const {name, age, occupation} = person;

// console.log(name, age, occupation);

const numbers = [1,2,3,4,5];
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

const [first, second, third] = numbers;
console.log(first, second, third);

const {occupation, ...rest} = person;
console.log(rest);