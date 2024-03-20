const blogContainer = document.getElementById("container");
const blogInfo = JSON.parse(localStorage.getItem("formContent"));
console.log("formContent", blogInfo);

for (const blog of blogInfo) {
    const blogElement = document.createElement("div");
    const blogTitle = document.createElement("h2");
    const blogContent = document.createElement("p");

    blogTitle.textContent = blog.title;
    blogContent.textContent = blog.content;
    
    blogElement.appendChild(blogTitle);
    blogElement.appendChild(blogContent);
    blogContainer.appendChild(blogElement);
}

