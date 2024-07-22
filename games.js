fetch("./games.json").then((response) => response.json()).then(data => {

    let radioWrapper = document.querySelector("#radioWrapper")

    function setRadios() {
        let radioCategories = data.map((game) => game.genre)
        let uniqueCategories = Array.from(new Set(radioCategories))

        uniqueCategories.forEach(genre => {
            let div = document.createElement(`div`)
            div.classList.add("form-check")
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="genres" id="${genre}">
                                <label class="form-check-label" for="${genre}">
                                ${genre}
                                </label>
                `

            radioWrapper.appendChild(div)
        })



    }
    setRadios()



    let cardsWrapper = document.querySelector("#cardsWrapper")
    function showCards(array) {
        cardsWrapper.innerHTML = ``;
        array.forEach((game, i) => {
            let div = document.createElement("div")
            div.classList.add("col-12" ,"col-md-3", "mb-2");
            div.innerHTML = `
                <img src="https://picsum.photos/${200 + i}" class="card-img-top img-fluid" alt="...">
                <div class="card-body cardbg">
                <h5 class="card-title text-truncate">${game.name}</h5>
                  <p class="card-text">${game.genre}</p>
                  <p class="text-end fs-5">${game.price}€</p>
        
        
        `
            cardsWrapper.appendChild(div)
        })

    }
    showCards(data)


    let radios = document.querySelectorAll(".form-check-input")

    function filteredByGenre() {
        let checked = Array.from(radios).find((input)=>input.checked)
        let categoria = checked.id
        if (categoria == `All`) {
            showCards(data)
        } else {
            let filtered = data.filter((game) => game.genre == categoria)
            showCards(filtered)
        }
    }

    radios.forEach(radio => {
        radio.addEventListener("click", () => {
            filteredByGenre()
        })
    })


    let inputRange = document.querySelector("#inputRange")
    let numberPrice = document.querySelector("#numberPrice")

    function setinputPrice(){
        let prices = data.map(game => game.price)
        let maxPrice = Math.ceil(Math.max(...prices))
        let minPrice = Math.floor(Math.min(...prices))

        inputRange.min = minPrice
        inputRange.max = maxPrice
        inputRange.value = maxPrice

        numberPrice.innerHTML =`${maxPrice}€`


    }
    setinputPrice()

    function filterbyPrice(){
        let filtered = data.filter((game) => game.price <= inputRange.value)
        showCards(filtered)
    }

    inputRange.addEventListener("input", ()=>{
        filterbyPrice()
        numberPrice.innerHTML = `${inputRange.value}€`
    })

    let wordInput = document.querySelector('#wordInput');
    function filterbyWord(word) {
        let filtered = data.filtered (game => game.name.toLowerCase().replaceAll(" "),("").includes(word.toLowerCase().replaceAll(" "),("")))
        showCards(filtered)
    }

    wordInput.addEventListener( 'input', ()=>{
        filterbyWord(wordInput.value) 
    })






})

