var sounds = [{
    keyboard: "w",
    sound: new Audio('sounds/tom-1.mp3')
  },
  {
    keyboard: "a",
    sound: new Audio('sounds/tom-2.mp3')
  },
  {
    keyboard: "s",
    sound: new Audio('sounds/tom-3.mp3')
  },
  {
    keyboard: "d",
    sound: new Audio('sounds/tom-4.mp3')
  },
  {
    keyboard: "j",
    sound: new Audio('sounds/snare.mp3')
  },
  {
    keyboard: "k",
    sound: new Audio('sounds/kick-bass.mp3')
  },
  {
    keyboard: "l",
    sound: new Audio('sounds/crash.mp3')
  }
]


//click
var buttonsArray = document.querySelectorAll(".drum");

for (var i = 0; i < buttonsArray.length; i++) {

  buttonsArray[i].addEventListener("click", function clickedButton() {
    var buttonClicked = this.innerHTML;
    for (var i = 0; i < sounds.length; i++) {
      if (buttonClicked == sounds[i].keyboard) {
        this.classList.add("pressed");
        var playSound = sounds[i].sound;
        playSound.play();

      }

    }
    setTimeout(removePressed, 300);
  })
}







//keydown
document.addEventListener("keydown", function pressedKey() {
  for (var i = 0; i < sounds.length; i++) {
    if (event.key == sounds[i].keyboard) {
      var playSound = sounds[i].sound;
      playSound.play();
      for (var i = 0; i < buttonsArray.length; i++) {
        if (event.key == buttonsArray[i].innerHTML) {
          buttonsArray[i].classList.add("pressed");

        }
      }
    }
  }
  setTimeout(removePressed, 300);
})

function removePressed() {
  for (var i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].classList.remove("pressed");
  }
}
