const add = document.getElementById("adicionar");
const body = document.getElementById("body");



add.addEventListener("click", function(){
createnote();
});


function createnote(){
//const note = document.querySelector(".text").cloneNode(true);
const div = document.createElement("div");
const textarea = document.createElement("textarea");
const container = document.createElement("div");
div.classList.add("headertext");
textarea.classList.add("textarea");
container.classList.add("text");
container.append(div, textarea);
body.append(container);
};
