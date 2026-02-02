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


let num0 = 0;
let num1 = 1; 

for(let i = 0; i < 10; i++){
    // risultato = risultato + "," + (num0 + num1);
    const somma = num0 + num1;
    risultato = `${risultato}`,`${(somma)}`;
    num0 = num1;
    num1 = risultato;
}
