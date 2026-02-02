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