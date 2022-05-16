// javascript for details.html
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();

  const template = `
  <h1>${post.title}</h1>
  <P>${post.body}</p>
  `;

  container.innerHTML = template;
};

const deletePost = async (e) => {
  await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });

  window.location.replace("/index.html");
};

deleteBtn.addEventListener("click", deletePost);
window.addEventListener("DOMContentLoaded", () => renderDetails());
