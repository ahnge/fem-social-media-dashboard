const input = document.querySelector("#dk-mode");
const bd = document.querySelector("body");

const setThemeDark = () => {
  bd.classList.remove("light");
  bd.classList.add("dark");
};

const setThemeLight = () => {
  bd.classList.remove("dark");
  bd.classList.add("light");
};

input.addEventListener("click", () => {
  if (bd.classList.contains("light")) {
    setThemeDark();
    localStorage.setItem("theme", "dark");
  } else {
    setThemeLight();
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    bd.classList.add("dark");
  } else {
    bd.classList.add("light");
  }
} else if (localStorage.getItem("theme") === "dark") {
  bd.classList.add("dark");
} else {
  bd.classList.add("light");
}
