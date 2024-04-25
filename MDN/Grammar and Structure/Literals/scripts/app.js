// Literal string
var literalString = `In JavaScript '\n' is a line-feed`;

console.log(literalString);

// Multiple string
var multipleLineString = `In Js, template strings can run 
over multiple lines,
so long live template strings`;

console.log(multipleLineString);

// String interpolation
const name = "Alex",
  time = "day before";
var interpolationString = `Hello ${name}, you need to return your paper: ${time}`;

console.log(interpolationString);

// Tagged templates
// Arrow function to format my arguments
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Mapping
    return arg.map((part) => `-${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};
// Smooth Arrray
const todos = [
  "Learn JS",
  "Watch Smallville",
  "Read Witcher",
  "Create a project for friend's birthday",
];

const progress = { js: 10, smallville: 90, witcher: 70, project: 20 };
print`I need to do:
${todos}
My current progress is not so good: ${progress}
`;
