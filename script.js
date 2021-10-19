const add = document.getElementById("adicionar");
const body = document.getElementById("body");
const note = document.querySelector(".text").cloneNode(true);


add.addEventListener("click", function(){
body.append(note);
});
