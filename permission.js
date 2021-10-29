let form = document.querySelector(".permission-form");
let chuck = document.querySelector(".chucky");
let frame = document.querySelector(".outer-frame");

chuck.style.display = 'none';


form.addEventListener('submit', function(e) {
    e.preventDefault();
    frame.style.display = "none";
    chuck.style.display = "block";
    chuck.style.margin = "0 auto";
})

