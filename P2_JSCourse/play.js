function myFunction(a,b) {
    return a+b;
}

// const myArrowFunction = (a,b) => {
//     return a+b;
// }

const myArrowFunction = (a,b) => a+b;

const random = () => 10;

console.log(myFunction(1,2), myArrowFunction(1,2), random());
