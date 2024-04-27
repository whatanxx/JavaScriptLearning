const nameOfOurHero = "Clark Kent";
const crushName = "Lana Lang";
for (let love = 0; love < 10; love++) {
  if (love === 0) {
    console.log(
      `${nameOfOurHero} fell in love with ${crushName} for first time`
    );
  } else if (love === 1) {
    console.log(
      `Our hero ${nameOfOurHero} fell out love for ${crushName} after falling for her ${
        love + 1
      } time`
    );
  } else if (love % 2 === 0) {
    console.log(
      `${nameOfOurHero} fell in love with ${crushName} again for the ${
        love + 1
      } time`
    );
  } else {
    console.log(
      `${nameOfOurHero} fell out of love with ${crushName} for the ${
        love + 1
      } time`
    );
  }
}

// We also have: do while ... , while ..., for ... in ..., for ... of ... loop, and for god sake we got labels assembler vibes so we can play continue and break to create our own loops

// So i know we can use JS to make our html webpage more dynamic or even make web application!

// var pathImages = "C:\\Users\\alex\\Desktop\\JavaScript\\MDN\\images\\clark.jpg";
// console.log(pathImages);
// Jesus its striping it again soooooooo mad
// Think about what slashes you are using ALEXXX :*
const bodyStyle = document.getElementById("body");

bodyStyle.setAttribute("style", "background-image: url(../images/clark.jpg)");
