const question_ = document.querySelector("#question_one");
const response_ = document.querySelector("#response_one");

function abrir(){
    if(response_.style.display="none"){
        response_.style.display="block";
    } 
}

function fechar(){
    if(response_.style.display="block"){
        response_.style.display="none";
    } 
}

question_.addEventListener("click", abrir);
response_.addEventListener("click", fechar);

const question_2 = document.querySelector("#question_two");
const response_2 = document.querySelector("#response_two");

function abrir_two(){
    if(response_2.style.display="none"){
        response_2.style.display="block";
    } 
}

function fechar_two(){
    if(response_2.style.display="block"){
        response_2.style.display="none";
    } 
}

question_2.addEventListener("click", abrir_two);
response_2.addEventListener("click", fechar_two);

const question_3 = document.querySelector("#question_three");
const response_3 = document.querySelector("#response_three");

function abrir_three(){
    if(response_3.style.display="none"){
        response_3.style.display="block";
    } 
}

function fechar_three(){
    if(response_3.style.display="block"){
        response_3.style.display="none";
    } 
}

question_3.addEventListener("click", abrir_three);
response_3.addEventListener("click", fechar_three);

const question_4 = document.querySelector("#question_four");
const response_4 = document.querySelector("#response_four");

function abrir_four(){
    if(response_4.style.display="none"){
        response_4.style.display="block";
    } 
}

function fechar_four(){
    if(response_4.style.display="block"){
        response_4.style.display="none";
    } 
}

question_4.addEventListener("click", abrir_four);
response_4.addEventListener("click", fechar_four);