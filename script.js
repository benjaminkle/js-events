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
const demoForm = document.getElementById("demoForm");
const formMsg = document.getElementById("formMsg");

demoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page refresh
  formMsg.textContent = "Form submitted successfully!";
});
//Focus and Blur Events Section
const focusInput = document.getElementById("focusInput");
const focusMsg = document.getElementById("focusMsg");

focusInput.addEventListener("focus", () => {
  focusMsg.textContent = "Input field is focused!";
});
focusInput.addEventListener("blur", () => {
  focusMsg.textContent = "Input field lost focus!";
});
//Event Degelations Section
const buttonContainer = document.getElementById("buttonContainer");
const delegationMsg = document.getElementById("delegationMsg");

buttonContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let message = "";

    // Check which button was clicked
    switch (event.target.textContent) {
      case "Button 1":
        message = "You clicked Button 1: Hello World!";
        break;
      case "Button 2":
        message = "You clicked Button 2: My name is Khoa!";
        break;
      case "Button 3":
        message = "You clicked Button 3: Task completed!";
        break;
      default:
        message = "You clicked an unknown button.";
    }

    // Display the custom message
    delegationMsg.textContent = message;
  }
});
