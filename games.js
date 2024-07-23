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

    function filterByGenre(array) {
        let checked = Array.from(radios).find((input)=>input.checked)
        let categoria = checked.id
        if (categoria == `All`) {
            return array
        } else {
            let filtered = array.filter((game) => game.genre == categoria)
            return filtered
        }
    }

    radios.forEach(radio => {
        radio.addEventListener("click", () => {
            globalFilter()
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

    function filterByPrice(array){
        let filtered = array.filter((game) => game.price <= inputRange.value)
        return filtered;
    }

    inputRange.addEventListener("input", ()=>{
        globalFilter()
        numberPrice.innerHTML = `${inputRange.value}€`
    })

    let wordInput = document.querySelector('#wordInput');
    
    function filterByWord(array) {
        let filtered = array.filter(game => game.name.toLowerCase().replaceAll(" ","").includes(wordInput.value.toLowerCase().replaceAll(" ","")))
        return filtered
    }

    wordInput.addEventListener( 'input', ()=>{
        globalFilter();
    })

    function globalFilter(){
        let filteredByPrice = filterByPrice(data)
        let filteredByWord = filterByWord(filteredByPrice)
        let filteredByGenre = filterByGenre(filteredByWord)
        showCards(filteredByGenre)

    }

    globalFilter();





})

