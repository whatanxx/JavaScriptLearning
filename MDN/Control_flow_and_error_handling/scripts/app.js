// Block statement is most basic statement
{
  // statement1;
  // statement2;
  // statement3;
  // statement4;
}

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
