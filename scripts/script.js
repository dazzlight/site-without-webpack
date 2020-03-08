function turnOn() {
  const bulbOnText = document.getElementById("lightText");
  let color = document.getElementsByName("color")[0].value;
  if (!color) {
    color = "#ffbe00";
  }
  const bulbOn = document.querySelector(".fas, .fa-lightbulb");
  bulbOn.style.color = color;
  document.body.style.backgroundColor = "white";
  bulbOnText.innerHTML = "Bulb is: ON";
  bulbOnText.style.color = "black";
}

function turnOff() {
  document.body.style.backgroundColor = "grey";
  const bulbOnText = document.getElementById("lightText");
  const bulbOn = document.querySelector(".fas, .fa-lightbulb");
  bulbOnText.innerHTML = "Bulb is: OFF";
  bulbOnText.style.color = "white";
  bulbOn.style.color = "black";
}
