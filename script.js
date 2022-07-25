console.log(window.innerWidth)
console.log(window.innerHeight)


var i = 0;
setInterval(function() {
    if (i == 3) {
        i = 0;
        document.getElementById("animation").style.bottom = 0;
    } else {
        i = i + 1;
        document.getElementById("animation").style.bottom = (i * 7.35) + "em";
    }
}, 3000)

window.addEventListener("scroll", function() {
    let value = window.scrollY;
})
alert("This Website is made by SAPTARSHI & NEELABHRA");