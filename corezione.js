// 290

console.log("hello");

let uno = 1;
let due = 2; 

for(let i = 0; i < 10; i++){
    alert("ascisc");
    uno += uno;
    due += due;
}

alert(due)
alert(uno)

// 300

let num0 = 0;
let num1 = 1; 

for(let i = 0; i < 10; i++){
    // risultato = risultato + "," + (num0 + num1);
    const somma = num0 + num1;
    risultato = `${risultato}`,`${(somma)}`;
    num0 = num1;
    num1 = risultato;
}

let fattoriale = 1;
let somma = 0;
for(let i = 0; i < 5; i++){
    fattoriale *= i
    somma += fattoriale 
}

alert(somma)

// 330

let numero_positivo;


do{

numero_positivo = parseInt(prompt("inserire valore positivo"));

if(numero_positivo <= 0){
    console.log("numero non valido");
}

}while(numero_positivo <= 0);

console.log("numero positivo:" , numero_positivo);
