const toggleBtn = document.querySelector("#themeToggle");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    document.documentElement.style.setProperty("--dark", "#fffff");
    document.documentElement.style.setProperty("--light", "#000000");
    this.querySelector("i").setAttribute("class", "fas fa-moon");
  } else {
    document.documentElement.style.setProperty("--dark", "#000000");
    document.documentElement.style.setProperty("--light", "#ffffff");
    this.querySelector("i").setAttribute("class", "fas fa-sun");
  }
}
