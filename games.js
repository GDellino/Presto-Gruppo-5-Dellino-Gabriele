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

        
        setRadios()   
    }
    
})

