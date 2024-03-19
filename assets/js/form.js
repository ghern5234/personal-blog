const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");
function createAndRenderBlog() {
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    const blogs = localStorage.getItem("blogs");
    blogs.push(blog);
    localStorage.setItem(JSON.stringify(blog));
};
console.log(titleInput);

function saveInfo (event) {
    event.preventDefault();
    const formContent = {
        usernameInput: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value.trim(),
    };

    const existingData = JSON.parse(localStorage.getItem("formContent")) || [];
    existingData.push(formContent);

    locatlStorage.setItem('formContent', JSON.stringify(existingData)); 
    window.location.href = "./blog.html";
};

submitButton.addEventListener('click', saveInfo);