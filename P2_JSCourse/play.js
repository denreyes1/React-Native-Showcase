var name = "Den";
var age = 29
var userHobbies = true;
console.log(name, age, userHobbies);
var nameAgeCombination=name+age;

function whoIsUser(name, age) {
    console.log(nameAgeCombination);
    return "Name is " + name + " , Age is "+ age;
}

console.log(whoIsUser(name, age));