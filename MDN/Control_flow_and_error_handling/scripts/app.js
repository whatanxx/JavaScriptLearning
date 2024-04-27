// Block statement is most basic statement
// {
//   // statement1;
//   // statement2;
//   // statement3;
//   // statement4;
// }

var x = 1;
{
  var x = 2;
}
// We have access to block scope
console.log(x);

let y = 2;
{
  let y = 3;
}
// We do not have access to block scope
console.log(y);

/*  vars are not blocked-scoped
    the are scoped to containing function/script
    so we can access them still outside block-scope
*/

/*
Two conditionals are provided by JS:
if...else and switch
*/

let age = 18;
// Tips don't use name as variable in global context ;)
var clientName = "Clark Kent";
if (age > 18) {
  console.log("You can legally buy alcohol in Poland.");
  console.log("But should you?");
} else if ((age > 18) & (clientName === "Clark Kent")) {
  console.log("Are you serious mate?");
} else {
  console.log("Stop youngster! You can't buy it.");
}

/*  Falsy values
    false
    undefined
    null
    0
    NaN
    ""
*/

// Switch is falling through, you need to break to not go down

switch (age === Number) {
  case age > 18:
    console.log("You can drink alcohol, but should you?");
  case clientName === "Clark Kent":
    console.log("Stop kidding");
    break;
  default:
    console.log("Don't drink it kiddo");
}

// throw `Oh I can't sell you alcohol you are drunk! ${clientName} what would your mother say`;

function canYouFly(nameOfPerson) {
  switch (nameOfPerson) {
    case "Clark Kent":
    case "John Jones":
      return `Of course ${nameOfPerson} you are not from earth dummy!\n`;
    case "Louis Lane":
    case "Lana Lang":
    case "Chloe Sullivan":
      return `Only if Clark will take you, ${nameOfPerson} with him\n`;
    case typeof nameOfPerson == "string":
      return "Lol you are human being";
    default:
      throw new Error("Not even a string!");
  }
}

try {
  console.log(
    canYouFly("Clark Kent"),
    canYouFly("John Jones"),
    canYouFly("Louis Lane"),
    canYouFly("Lana Lang"),
    canYouFly("Chloe Sullivan")
  );
  // console.log(Krypton);
  console.log(canYouFly(null), canYouFly());
} catch (error) {
  console.error(
    `${error.name} tried penetrating our firewalls his input was ${error.message}`
  );
  console.error(
    "For Rao book what have you typed in there? It is definetely not a string!"
  );
} finally {
  console.log(
    "Finally, we answered all your question about flying, moving to the next topic..."
  );
}

console.log("See you next week on another episode of Smallville.");
