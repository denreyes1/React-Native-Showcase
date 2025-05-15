let hobbies = ["sports", "cooking", 25, true, {name: "baking"}, ["reading", "traveling"]]
// console.log(hobbies);

for(let hobby of hobbies){
    // console.log(hobby);
}

let hobbiesArray = ["sports", "cooking", "painting"];
let hobbiesSubset = hobbiesArray.slice(0,2);
console.log(hobbiesSubset);

let filteredHobbies = hobbiesArray.filter((val) => val !== "sports");
console.log(filteredHobbies);

let updatedHobbies = hobbiesArray.map((string) => "hobby: " + val);
console.log(updatedHobbies);