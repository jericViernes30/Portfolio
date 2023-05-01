//select items 
const img = document.getElementById('img')
const title = document.getElementById('title')
const desc = document.getElementById('desc')
const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')
const dot = document.getElementById('dot')
const htmlLeg = document.getElementById('html-1')
const cssLeg = document.getElementById('css-1')
const jsLeg = document.getElementById('js-1')
const lang = document.getElementById('language')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
let currentItem = 0

nextBtn.addEventListener('click', () => {
})

prevBtn.addEventListener('click', () => {
    webPortfolio()
})

function colorFlipper() {
    img.src = 'proj2.png'
    title.innerText = 'Color Flipper'
    desc.innerText = 'A web-based Color Flipper with a choices between Simple (including color names and rgb() and Hex Codes'
    html.style.width = '31.2%'
    css.style.width = '43.5%'
    js.style.width = '25.3%'
    htmlLeg.innerText = 'HTML 31.2%'
    cssLeg.innerText = 'CSS 43.5%'
    jsLeg.innerText = 'JavaScript 25.3%'
}

function webPortfolio() {
    img.src = 'proj1.png'
    title.innerText = 'Web Portfolio'
    desc.innerText = 'Created a Web-based portfolio for a project on subject called Information Assurance and Security. This portfolio also includes blog about on how to setup a firewall and Sophos Endpoint Security. Created using HTML, CSS and JavaScript'
    html.style.width = '44.5%'
    css.style.width = '38.55%'
    js.style.width = '17.0%'
    htmlLeg.innerText = 'HTML 44.5%'
    cssLeg.innerText = 'CSS 38.5%'
    jsLeg.innerText = 'JavaScript 17.0%'
}
