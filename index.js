const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");
const navigations = document.querySelector(".navigations");
const links = document.querySelectorAll(".links");

openbtn.addEventListener("click", function(e) {
    e.preventDefault();
    navigations.classList.toggle("block");
})
console.log(links)
closebtn.addEventListener("click", function(e) {
    e.preventDefault();
    navigations.classList.remove("block")
})
links.forEach(e => {
    e.addEventListener('click', function() {
        navigations.classList.remove('block')
    })
});
