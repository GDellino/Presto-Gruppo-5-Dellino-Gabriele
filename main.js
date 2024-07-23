let navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    if (window.innerWidth > 600) {
        if (scrollValue > 20) {
            navbar.classList.remove("mt-4", "w-50")
            navbar.classList.add("w-100")
        } else {
            navbar.classList.add("mt-4", "w-50")
            navbar.classList.remove("w-100")
        }
    }

})


let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');


function createInterval(total, finalNumber, time) {
    let counter = 0
    let interval = setInterval(() => {
        if (counter < total) {
            counter++
            finalNumber.innerHTML = counter
        } else {
            clearInterval(interval)
        }
    }, time)
}

let check = true;
let observer = new IntersectionObserver((entries) => {

    entries.forEach((el) => {
        if (el.isIntersecting && check) {
            createInterval(100, firstNumber, 50)
            createInterval(80, secondNumber, 80)
            createInterval(150, thirdNumber, 30)
            check = false;
        }
    })
});
observer.observe(firstNumber)

const games = [
    { name: "Playstation5", genere: "Console", prezzo: 599, img: "MEDIA/playstation3.jpg" },
    { name: "XboxOne", genere: "Console", prezzo: 399, img: "MEDIA/xbox.jpg" },
    { name: "Fifa23", genere: "Sport", prezzo: 59, img: "MEDIA/Fifa.jpg" },
    { name: "Spiderman", genere: "Action", prezzo: 39, img: "MEDIA/spiderman.jpg" }

]

let gamesWrapper = document.querySelector("#gamesWrapper")
games.forEach((game) => {
    let div = document.createElement("div")
    div.classList.add("col-12", "col-lg-3", "py-3")
    div.innerHTML = `
    
    <div class="card">
      <img src="${game.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${game.name}</h5>
        <p class="card-text">${game.prezzo}€</p>
        <a href="#" class="btn btnCustom">BUY</a>
      </div>
    </div>
  </div>
    `
    gamesWrapper.appendChild(div)

})

const reviews = [
    {name : 'Carlo' , description : "Fifa fa schifo"},
    {name : 'Pino' , description : "Elder Ring è il miglior gioco della storia"},
    {name : 'Mattia' , description : "Consegne veloci"},
    {name : 'Genoveffa' , description : "Servizio telefonico sempre disponibile"},
    {name : 'Simone' , description : "Prezzi fantastici"}
]

let swiperWrapper = document.querySelector('#swiperWrapper')

reviews.forEach(review =>{

    let div = document.createElement('div')
    div.classList.add("swiper-slide")
    div.innerHTML=`
    <div class="d-flex flex-column justify-content-center align-items-center h-100 p-3 text-center">
        <h4>${review.name}</h4>
        <p>${review.description}</p>
    </div>
    `
    swiperWrapper.appendChild(div);
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



