// const button = document.getElementById("submit");
// let isDark = false;

// function toggle() {
//     if(isDark) {
//         lightMode();
//     } else {
//         darkMode();
//     }
// };

// const lightMode = function () {
//     const elements = document.querySelectorAll(".dark");
    
// };


// button.addEventListener("click")


const button = document.getElementById("submit");

let isDark = false;

function toggle() {
  if (isDark) {
    lightMode();
  } else {
    darkMode();
  }
  isDark = !isDark;
}

const lightMode = function () {
  const elements = document.querySelectorAll(".dark");
  console.log(elements);
  for (const element of elements) {
    element.classList.add("light");
    element.classList.remove("dark");
  }
};

const darkMode = function () {
  const elements = document.querySelectorAll(".light");
  for (const element of elements) {
    element.classList.add("dark");
    element.classList.remove("light");
  }
};

button.addEventListener("click", toggle);