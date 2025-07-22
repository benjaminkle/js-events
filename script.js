//Mouse Events Sections
const mouseBtn = document.getElementById("mouseBtn");
const mouseMsg = document.getElementById("mouseMsg");

mouseBtn.addEventListener("mouseenter", () => {
  mouseMsg.textContent = "Hovering over the button!";
});
mouseBtn.addEventListener("mouseleave", () => {
  mouseMsg.textContent = "Unselected the button!";
});
//Keyboard Events Section
const keyInput = document.getElementById("keyInput");
const keyMsg = document.getElementById("keyMsg");

keyInput.addEventListener("keydown", (event) => {
  keyMsg.textContent = `Last key pressed: ${event.key}`;
});

//Form Events Section
//Focus and Blur Events Section
//Event Degelations Section
