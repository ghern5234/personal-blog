//Creating a global variable containing the tobble button
const button = document.getElementById("toggle");

//Defining 
let isDark = false;

//Function for setting light mode from dark mode
const lightMode = function () {
  const elements = document.querySelectorAll(".dark");
  for (const element of elements) {
    element.classList.add("light");
    element.classList.remove("dark");
  }
};
//Function for settiing dark mode from light mode
const darkMode = function () {
  const elements = document.querySelectorAll(".light");
  for (const element of elements) {
    element.classList.add("dark");
    element.classList.remove("light");
  }
};

//Toggle function containing an statement statement for turning dark mode and vice verse, 
//as well as switching the variable rom false to true and vice versa
function toggle() {
  if (isDark) {
    lightMode();
  } else {
    darkMode();
  }
  isDark = !isDark;
}

//Setting an on click event listener to initiate toggle function
button.addEventListener("click", toggle);