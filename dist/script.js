"use strict";var input=document.querySelector("#dk-mode"),bd=document.querySelector("body"),setThemeDark=function(){bd.classList.remove("light"),bd.classList.add("dark")},setThemeLight=function(){bd.classList.remove("dark"),bd.classList.add("light")};input.addEventListener("click",(function(){bd.classList.contains("light")?(setThemeDark(),localStorage.setItem("theme","dark")):(setThemeLight(),localStorage.setItem("theme","light"))})),null===localStorage.getItem("theme")?window.matchMedia("(prefers-color-scheme: dark)").matches?bd.classList.add("dark"):bd.classList.add("light"):"dark"===localStorage.getItem("theme")?bd.classList.add("dark"):bd.classList.add("light");
//# sourceMappingURL=script.js.map