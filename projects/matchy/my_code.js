// PT1 step 1 - creates an animal object and adds properties to the object //
var animal = {};
animal.species = "Cat";
animal['name'] = "Sebastian";
animal.noises = [];
//console.log(animal);

// PT1 step 2 - adds new properties to animal "cat" //
var noises = [];
noises[0] = "meow";
noises.push("purr");
noises.unshift("hissss");
noises[noises.length] = "rawr";

//console.log(noises.length);
//console.log(noises[noises.length - 1]);
//console.log(noises);

// PT1 step 3 - adds new value to "noises" property //
animal.noises = noises;
noises.push("grrrr");

//console.log(animal);

// PT1 step 4 //
/* -What are the different ways you can access properties on objects? 
    Dot notation OR bracket notation 
  -What are the different ways of accessing elements on arrays?
    Calling the index number
*/

// PT1 step 5

// PT1 step 6 - creates new animal objects and pushes them to the "animals" array //
var animals = [];
animals.push(animal);
//console.log(animals);

var duck = { species: 'Duck',
             name: 'Jerome',
             noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck);

var dog = { species: 'Dog',
            name: 'Jack',
            noises: ['bark', 'woof', 'bow']
};
animals.push(dog);

var horse = { species: 'Horse',
              name: 'Epona',
              noises: ['neigh', 'ruff', 'eeeh']
};
animals.push(horse);
console.log(animals);

// PT1 step 7 - generates a random index number based on the animals array and attatches as a new property to "animal" //
// We decided to use an array to contain our infomration. Each animal is an nugget of information by itself and it is easier to call that group of information with an index number.

var friends = [];
function animalRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var i = animalRandom(0, animals.length - 1);
//console.log(i);
friends.push(animals[i].name);
animals[0].friends = friends;

//console.log(friends);
//console.log(animal);


// PT2 step 1 - Search function
/*
1 Enter a "name" into the search function
2 Search through each index of animals[]
  - IF search "name" matches animals[i].name, return animals[i].name
  - IF "name" does NOT match, move to next index
*/
function search(animalName) {
   for (var i = 0; i < animals.length; i++) {
        if (animalName === animals[i].name) {
            return animals[i];
        }
    }
}

// PT2 step 2 - Edit
function edit (animalName, newObj) {
    for (var i = 0; i < animals.length; i++) {
        if (animalName === animals[i].name) {
            animals[i].animalName = newObj;
        }
    }
}
