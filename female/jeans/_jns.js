// TODO
const feat_ = document.querySelector(".features-btn");
const categ_ = document.querySelector(".categories-btn");
const _drop1 = document.querySelector(".drop1-ul");
const _drop2 = document.querySelector(".drop2-ul");
const _first_drop_btn = document.querySelector(".first-drop-btn");
const _second_drop_btn = document.querySelector(".second-drop-btn");

const _nav_sect = document.querySelector(".nav-header-sect");

feat_.addEventListener("click", () => {
    _drop1.classList.toggle("undrop1");
    _first_drop_btn.classList.toggle("rotate-it");
});
categ_.addEventListener("click", () => {
    _drop2.classList.toggle("undrop2");
    _second_drop_btn.classList.toggle("rotate-it")
})


const menu_btn_div = document.querySelector(".menu_btn_div");
let isMenuOpen = false;

menu_btn_div.addEventListener("click", () => {
    if (!isMenuOpen) {
        menu_btn_div.classList.add("open");
        isMenuOpen = true;
        _nav_sect.classList.add("shown")
    } else {
        menu_btn_div.classList.remove("open");
        isMenuOpen = false;
        _nav_sect.classList.remove("shown")
    }
});

