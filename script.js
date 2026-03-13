function toggleMenu() {
  var menu = document.getElementById("sidebar");
  menu.classList.toggle("active");

  var btn = document.querySelector(".menu-btn");

  if (menu.classList.contains("active")) {
    btn.innerHTML = "✖";
  } else {
    btn.innerHTML = "☰";
  }
}
