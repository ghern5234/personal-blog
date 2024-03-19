const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");



function saveInfo(event) {
  event.preventDefault();
//   if statement
  const formContent = {
    usernameInput: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };

  const existingData = JSON.parse(localStorage.getItem("formContent")) || [];
  existingData.push(formContent);

  localStorage.setItem("formContent", JSON.stringify(existingData));
  window.location.href = "./blog.html";
}

submitButton.addEventListener("click", saveInfo);
