const data = [{
        id: 1,
        img: "./images/display/Sibujwu;bujj.jpg",
        title: "Suit",
        price: "$50",
        category: "male",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    }, {
        id: 2,
        img: "./images/display/Bgdghcghc.jpg",
        title: "abgada",
        price: "$50",
        category: "male",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    }, {
        id: 3,
        img: "./images/display/Peuiuinnjnjnjnjbd.jpg",
        title: "packet shirt",
        price: "$50",
        category: "male",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    }, {
        id: 4,
        img: "./images/display/Jtvbhjb,dylsyv.jpg",
        title: "jean wears",
        price: "$50",
        category: "male",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    },
    {
        id: 5,
        img: "./images/display/Wjblhjjbllllg.jpg",
        title: "male natives",
        price: "$50",
        category: "male",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    }, {
        id: 6,
        img: "./images/display/Suyuhblulfy.jpg",
        title: "senator wears",
        price: "$80",
        category: "male",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    }, {
        id: 7,
        img: "./images/display/Fmk.bahvhva.jpg",
        title: "female natives",
        price: "$80",
        category: "female",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    }, {
        id: 8,
        img: "./images/display/Jhabigdgd.png",
        title: "female jeans",
        price: "$80",
        category: "female",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"

    }, {
        id: 9,
        img: "./images/display/Dhqhjwbbubee.jpg",
        title: "cloth diyeing",
        price: "$80",
        category: "female",
        src:"",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam"
    }
];


const container = document.querySelector(".categ-cards-container");
const $btnContainer = document.querySelector(".filter-btns-container")

window.addEventListener("DOMContentLoaded", () => {
    showCard(data);
    displayBtn();
});

function showCard(dataItem) {
    const loadCards = dataItem.map((item) => {
        return ` <div class="card">
        <div class="card-image">
            <a href="#" class="img-href">
                <img src="${item.img}" alt="" class="image-card">
            </a>
        </div>
        <div class="categ-card-desc">
            <header>
                <h4>${item.title}</h4>
                <p>${item.price}+</p>
            </header>
            
           <a href="${item.src}" class="categ-card-btn-link" target="_blank"><button class="categ-card-btn">view all</button></a>
        </div>
    </div>`;

    }).join("");
    container.innerHTML = loadCards;
}

function displayBtn() {
    const categories = data.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);

    const categoryBtn = categories.map(($category) => {
        return ` <button class="btn-filter" data-id="${$category}">${$category}</button>`;
    }).join("");

    $btnContainer.innerHTML = categoryBtn;

    let $filterBtn = $btnContainer.querySelectorAll(".btn-filter");
    $filterBtn[0].classList.add("focused");
    $filterBtn.forEach(($btn) => {
        $btn.addEventListener("click", (d) => {
            // console.log(d.currentTarget.dataset)
            const $categ = d.currentTarget.dataset.id;

            $filterBtn.forEach((x) => {
                if (x !== $btn) {
                    x.classList.remove("focused")
                } else {
                    x.classList.add("focused");
                }
            })
            const dataCategory = data.filter(($dataItem) => {


                if ($dataItem.category === $categ) {
                    return $dataItem;
                }
            })
            if ($categ === "all") {
                showCard(data);
            } else {
                showCard(dataCategory)
            }
        })
    })
}

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

const date_elem=document.querySelector("#date")
let date =new Date();
date_elem.innerHTML=date.getFullYear();