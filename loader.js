window.addEventListener("load", () => {
    const loader = document.querySelector('.loader')
    document.querySelector('.loader').classList.add("loader--hidden")

    document.querySelector('.loader').addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".loader"))
    })
})