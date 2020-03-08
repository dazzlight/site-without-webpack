function turnOn() {
  document.body.style.backgroundColor = "white";
  const bulbOnText = document.getElementById("lightText");
  const bulbOn = document.querySelector(".fas, .fa-lightbulb");
  bulbOnText.innerHTML = "Bulb is: ON";
  bulbOnText.style.color = "black";
  bulbOn.style.color = "yellow";
}

function turnOff() {
  document.body.style.backgroundColor = "grey";
  const bulbOnText = document.getElementById("lightText");
  const bulbOn = document.querySelector(".fas, .fa-lightbulb");
  bulbOnText.innerHTML = "Bulb is: OFF";
  bulbOnText.style.color = "white";
  bulbOn.style.color = "black";
}
