//Creating global variable for blog container via container div
const blogContainer = document.getElementById("container");
//Calling form content from local storage and parsing froming JSON string.
//Storing that data into blog variable
const blogInfo = JSON.parse(localStorage.getItem("formContent"));

//For loop to create blog post from info
for (const blog of blogInfo) {

 //Creating elements and storing them in variables
    const blogElement = document.createElement("div");
    const blogTitle = document.createElement("h2");
    const blogContent = document.createElement("h3");
    const blogAuthor = document.createElement("p");

//Taking specific and individual text info and storing it in the corresponding
//elements/variables just created
    blogTitle.textContent = blog.title;
    blogContent.textContent = blog.content;
    blogAuthor.textContent = "Posted by: " + blog.usernameInput;

//Attaching the variable/elements to the page   
    blogElement.appendChild(blogTitle);
    blogElement.appendChild(blogContent);
    blogElement.appendChild(blogAuthor);
    blogContainer.appendChild(blogElement);
}

//Calling the back but element and storing it in a global variable 
const backButton = document.getElementById("btn");

//Function for the back button
function returnAnchor(event) {
    event.preventDefault();

//Call the back button element and store in variable
    const returnBtn = document.createElement("button")

//Link form page to be ran
    window.location.href="./index.html";
};

//Attach on event listener to intialize the back button function when clicked
backButton.addEventListener("click", returnAnchor)