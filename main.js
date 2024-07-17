let navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () =>{
    let scrollValue = window.scrollY;
    if(scrollValue > 20) {
        navbar.classList.remove("mt-4", "w-50")
        navbar.classList.add("w-100")
    } else{
        navbar.classList.add("mt-4", "w-50")
        navbar.classList.remove("w-100")
    }
})