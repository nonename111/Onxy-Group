function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    sidebar.classList.toggle("hide");
    content.classList.toggle("full-width");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    sidebar.classList.add("hide");
    content.classList.add("full-width");
  });