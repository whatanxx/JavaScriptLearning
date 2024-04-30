// Destructing this array to free cities
const cities = ["Smallville", "Coast city", "Metropolis"];
const [originCity, sideCity, mainCity] = cities;

function getOriginCity() {
  return "Smallville";
}

// We can chain, nest our expression but do we really want this?
// It is quite messy
// Turned off prettier for this...
let xyz;
const yz = (xyz = getOriginCity());
console.log(yz);
console.log(xyz = getOriginCity());

console.log([x, xyz=getOriginCity(), 0]);
console.log(getOriginCity(0, x=getOriginCity(), 0))  

const hero = "Clark Kent";
const antihero = "Bizzarre Clark Kent";
const cloneHero = 'Clark Kent'
const ageOfHero = 18;
const ageOfHeroString = "18";
// Beatufiul ternanry operator
console.log(hero==antihero ? "yes" : "no");
console.log(hero==cloneHero ? "yes" : "no");
console.log(hero===cloneHero ? "yes" : "no");
console.log(ageOfHero==ageOfHeroString?"yes":"no");
console.log(ageOfHero===ageOfHeroString?"yes":"no");

// We have a bitwise operators, like not and or
// AND like multiply
console.log(7 & 6);
// OR like adding
console.log(7 | 6);
// XOR like substraction
console.log(7^6);
// NOT - magical one, change sign and adds 1 (most likely because represnted that way)
console.log(~7);
// Shifting bits so cool
console.log(4<<1);
console.log(8>>1);
// Sometiems you want to fill zeroes
console.log(8>>>1);
// We also have logical operators

//Big ints are similar

//String concatenation (+)
console.log("Clark" + " loves Lois");

// Unary operators - only one/uno operand :)

let superTeam = {
    name: "Work in Progress",
    age: 1,
}

delete superTeam.age;

//  You can delete array elements ;) but dont to this, it just bad...

console.log(typeof superTeam);

function callToPhantomZone(){
    console.log(void "help me im in a phantom zone, please!!");
}

callToPhantomZone();

// Relational operators

if("name" in superTeam){
    console.log(`Of course we have a name, it's... ${superTeam.name}`);
}

// instanceof
// type of object at runtime confirm


// Basic expressions

// this keyword
// Grouping operator = ()
// new operator 
// super keyword