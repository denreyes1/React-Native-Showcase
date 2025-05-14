const person = {
    name: 'Den',
    age: 29,
    greet: function(){
        console.log("Hi my name is "+this.name);
    }
}

console.log(person.greet());