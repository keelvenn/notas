const add = document.getElementById("adicionar");
const body = document.getElementById("body");



add.addEventListener("click", function(){
createnote();
});


function createnote(){
const note = document.querySelector(".text").cloneNode(true);
body.append(note);
};
