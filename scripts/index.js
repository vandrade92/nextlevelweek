const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")
buttonSearch.addEventListener("click",() => {
    modal.classList.remove("hide")

})

close.addEventListener("click", () => {
    modal.classList.add("hide")

})

// parei em 1:25:17 https://youtu.be/b_u7zeg2LAM