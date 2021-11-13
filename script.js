const adicionar = document.getElementById("adicionar");
const notas = document.getElementById("notas");
let lists = [];
let index = 0;


if(!localStorage.index){
  localStorage.index = "[]";
}

if(!localStorage.data){
  localStorage.data = "[]";
}

loadnote();

adicionar.addEventListener("click",function(){
adicionar_nota();



});


function adicionar_nota(event){

  const container = document.createElement("div");
  container.setAttribute("id","container");

  const containerchk = document.createElement("div");
  containerchk.setAttribute("id","containerchk");

  const headernota = document.createElement("div");
  headernota.setAttribute("id","headernota");

  const textarea = document.createElement("textarea");

  const apagar = document.createElement("button");
  apagar.setAttribute("id","apagar");

  const expandir = document.createElement("input");
  expandir.type = "checkbox";
  expandir.setAttribute("id","expandir");

  const exp = document.createElement("button");
  exp.setAttribute("id","exp");
  exp.innerText = "-";

  const check = document.createElement("button");
  check.setAttribute("id","check");
  check.innerText = "✔";

  containerchk.append(expandir,check,exp);

  apagar.innerText = "X";

  headernota.append(containerchk,apagar);

  container.append(headernota, textarea);

  notas.append(container);

    apagar.addEventListener("click",function(){

      let list_storage = JSON.parse(localStorage.data);

      let index_list = list_storage.indexOf(textarea.value, 1);
      list_storage.splice(index_list);

      localStorage.data = JSON.stringify(list_storage);

      container.remove(); })

    exp.addEventListener("click", function(){

      if(expandir.checked == true){
       expandir.checked = false;
       }else if(expandir.checked == false){
       expandir.checked = true;
       }

     if(expandir.checked == true ){
       textarea.style.width = "500px";
       textarea.style.height = "500px";
       headernota.style.width = "500px";
       }else{
       textarea.style.width = "200px";
       textarea.style.height = "200px";
       headernota.style.width = "200px";
       }

    });


   }; // Final função




function target(event){
  let target = event.target;

  //TextArea recebe os id's
  if(!target.id ){
    target.id = index;
    index = index + 1;
  }


  //console.log("TextArea ID: "target.id);

    target.addEventListener("blur",function(event){
    lists[target.id] = target.value;

    push_notes();
    //Coloca o valor do textvalue na lista

    }) };


function push_notes(event){

  let list_storage = JSON.parse(localStorage.data);

  list_storage = lists;

  localStorage.data = JSON.stringify(list_storage);

 };

function loadnote(){
  let list_storage = JSON.parse(localStorage.data);

  list_storage.forEach(function(list,index){
    const container = document.createElement("div");
    container.setAttribute("id","container");

    const containerchk = document.createElement("div");
    containerchk.setAttribute("id","containerchk");

    const headernota = document.createElement("div");
    headernota.setAttribute("id","headernota");

    const textarea = document.createElement("textarea");
    textarea.value = list_storage[index];
    lists.push(list);

    const apagar = document.createElement("button");
    apagar.setAttribute("id","apagar");

    const expandir = document.createElement("input");
    expandir.type = "checkbox";
    expandir.setAttribute("id","expandir");

    const exp = document.createElement("button");
    exp.setAttribute("id","exp");
    exp.innerText = "-";

    const check = document.createElement("button");
    check.setAttribute("id","check");
    check.innerText = "✔";

    containerchk.append(expandir,check,exp);

    apagar.innerText = "X";

    headernota.append(containerchk,apagar);

    container.append(headernota, textarea);

    notas.append(container);

    console.log(lists);

    textarea.click();

    apagar.addEventListener("click",function(){

      let list_storage = JSON.parse(localStorage.data);

      let index_list = list_storage.indexOf(textarea.value, 1);
      list_storage.splice(index_list);

      localStorage.data = JSON.stringify(list_storage);

      container.remove();

    })

    exp.addEventListener("click", function(){

      if(expandir.checked == true){
       expandir.checked = false;
       }else if(expandir.checked == false){
       expandir.checked = true;
       }

     if(expandir.checked == true ){
       textarea.style.width = "500px";
       textarea.style.height = "500px";
       headernota.style.width = "500px";
       }else{
       textarea.style.width = "200px";
       textarea.style.height = "200px";
       headernota.style.width = "200px";
       }

    });
    //Cria uma lista com valor do Index

       // Final função
    });
    push_notes(); };

function apagar_nota(){
  let list_storage = JSON.parse(localStorage.data);

  let index_list = list_storage.indexOf(textarea.value, 1);
  list_storage.splice(index_list);

  localStorage.data = JSON.stringify(list_storage);

  container.remove();
};

console.log(index);
