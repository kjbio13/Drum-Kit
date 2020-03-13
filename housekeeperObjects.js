// document.querySelector("button").addEventListener("click", handleClick);
//
//
// function handleClick(){
//   alert("Hello!")
// }

var houseKeeper1 = {
  name: "Maritza",
  lengthOfDuty: 21,
  canNameAWomanQuestionMark: false,
  sayYesIn: [{
    french: function() {
      alert("Oui")
    },
    spanish: function() {
      alert("Si")
    },
    filipino: function() {
      alert("Opo")
    }
  }]
}


function HouseKeeper(name, lengthOfDuty, canNameAWomanQuestionMark, sayYesIn) {
  this.name = name;
  this.lengthOfDuty = lengthOfDuty;
  this.canNameAWomanQuestionMark = canNameAWomanQuestionMark;
  this.sayYesIn = sayYesIn;
};


var languageArray = [];

function LanguageConstructor(language, functionSay){
  this.language = language;
  this.functionSay = functionSay;
}

languageArray.push(new LanguageConstructor("italian", function() {
  alert("Si")
}));

languageArray.push(new LanguageConstructor("english", function() {
  alert("Yes")
}));

var houseKeeper17 = new HouseKeeper("Flaca", 23, true, languageArray);

function loopThrough(){
  for (var i = 0; i < houseKeeper17.sayYesIn.length; i++) {
  console.log(houseKeeper17.sayYesIn[i].functionSay());
  }
}

var buttonsArray = document.querySelectorAll(".drum")

for (var i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", loopThrough())
}
