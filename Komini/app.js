//scroll Body
const body = document.body;
let lastScroll= 0;

window.addEventListener(`scroll` , () => {
    const currentScroll = window.pageYOffset
console.log(currentScroll);
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")        
    }
    
    if (currentScroll > lastScroll && !body.classList.contains(`scroll-down`)) {
        body.classList.remove(`scroll-up`)
        body.classList.add(`scroll-down`)
    }
    if (currentScroll < lastScroll && body.classList.contains(`scroll-down`)) {
        body.classList.remove(`scroll-down`)
        body.classList.add(`scroll-up`)
    }

    lastScroll = currentScroll;
})


//scroll media

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const elem = document.getElementById("container-media");

btnLeft.addEventListener("click", ()=> {
    elem.scrollLeft -= 800;
})
btnRight.addEventListener("click", ()=> {
    elem.scrollLeft += 800;
})