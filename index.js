console.log("hello you");

function saluta(){
    console.log("hello you");
}

saluta();
saluta();
saluta();

function salutaUtente(nome_utente){
    console.log(`caio ${nome_utente}`);
}

salutaUtente("scimmia");
salutaUtente("scimpaze");
salutaUtente("orango");
salutaUtente("gorilla");

salutaUtente();

function somma(n1, n2){
    return n1 + n2;
}

const somma1 = somma(1,6);
console.log(somma1);
console.log(somma(10,6));


function sotrazione(n1, n2){
    return n1 - n2;
}

const somma2 = sotrazione(1,6);
console.log(somma2);
console.log(sotrazione(10,6));

function salutaPredefinito(utente, tipo_saluto = "ciao"){
    console.log(`${tipo_saluto}`,`${utente}`);
}

// variante saluto utente
// valori di defoult mesi per ultimi

const fn_costante = function(){
    console.log("funzione in costante");
}

fn_costante();

const funzione_arrwo = () => {
    console.log("funzione in costante");
}

// arrwo ha di defolt un return
// deve pero essere una espressione e senza operzioni logiche  
const arrwo = (a , b) => a + b;
console.log(arrwo(20, 58));

// scope
let var_globale = "sono una variabile globale";

function mia_funzione(){
    let var_locale = "sono una variabile locale";
    console.log(var_locale);
    console.log(var_globale);
}

console.log(var_locale);// non definita
// solo usandogvfeeeeeeeeeeee let c'è una diferenza tra variabile locale e globale


