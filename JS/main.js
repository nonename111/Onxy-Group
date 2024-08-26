function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  const toggleBtnIcon = document.querySelector(".toggle-btn i");

  sidebar.classList.toggle("hide");
  content.classList.toggle("full-width");

  // Ganti ikon antara bars dan times saat sidebar ditampilkan/disembunyikan
  if (sidebar.classList.contains("hide")) {
      toggleBtnIcon.classList.remove("fa-times");
      toggleBtnIcon.classList.add("fa-bars");
  } else {
      toggleBtnIcon.classList.remove("fa-bars");
      toggleBtnIcon.classList.add("fa-times");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  const toggleBtnIcon = document.querySelector(".toggle-btn i");

  sidebar.classList.add("hide");
  content.classList.add("full-width");

  // Pastikan ikon diubah sesuai dengan kondisi sidebar pada load pertama kali
  toggleBtnIcon.classList.remove("fa-times");
  toggleBtnIcon.classList.add("fa-bars");
});
