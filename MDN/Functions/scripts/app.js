function callHero(heroName) {
  return `Watch tower to ${heroName}, ${heroName} copy \n`;
}

function callAllHerosMeeting() {
  return (
    callHero("Green Arrow") +
    callHero("Aquaman") +
    callHero("Cyborg") +
    callHero("Superman")
  );
}

function createCallHistoryListItems(heroes, reasonForMeeting) {
  var list = document.getElementById("call-history-list");
  for (let i = 0; i < heroes.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerText = callHero(heroes[i]);
    list.appendChild(listItem);
  }
  var dialogHistoryContainer = document.getElementById(
    "call-history-container"
  );
  var reasonForMeetingParagraph = document.createElement("p");
  reasonForMeetingParagraph.innerText = reasonForMeeting;
  dialogHistoryContainer.appendChild(reasonForMeetingParagraph);
}

createCallHistoryListItems(
  ["Green Arrow", "Aquaman", "Cyborg", "Superman"],
  "DOOMSDAY IS COMING"
);

// Anonymous function no name no parameters, but it calls our heroes!

const heroesCalling = function () {
  return `Superheroes rise!` + callAllHerosMeeting();
};

// Method is on object, function is just here!

console.log(heroesCalling());

// Inner function can have outer function params, and global ones!
