//Creating global variables that contain elements created dynamically from user input via the document 
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");


//Creating a function for saving user input
function saveInfo(event) {
  event.preventDefault();
//checking if all input fields have content and returning an alert if not
  if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
    window.alert('Uh-oh! Looks like something is missing. Please make sure all fields are filled.');

    return
  }; 
//Defining content info as an object
  const formContent = {
    usernameInput: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };
//Calling and parsing form content info into JSON string for storage  and pushing that into variable for storing
  const existingData = JSON.parse(localStorage.getItem("formContent")) || [];
  existingData.push(formContent);

// Storing form content into local storage as a JSON string
  localStorage.setItem("formContent", JSON.stringify(existingData));

//Takes user to the blog list page
  window.location.href = "./blog.html";
}

//Setting an event listener to the submit button to run the save info function
submitButton.addEventListener("click", saveInfo);
