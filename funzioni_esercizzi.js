function saluta(){
    console.log("benvenuto al corso di javascript!")
}

saluta();
saluta();
saluta();

function salutaStudente(nome){
    console.log(`caio ${nome}, buono studio!`);
}

salutaStudente("no");
salutaStudente("you");
salutaStudente("paw");

let areaRetangolo = (base, altezza) => base * altezza;

console.log(areaRetangolo(12,3));
console.log(areaRetangolo(15,10));

let calcolaQuadrato = (val) => val * val;

console.log(calcolaQuadrato(5));
console.log(calcolaQuadrato(12));
console.log(calcolaQuadrato(20));

let celsiusToFahrenheit = (celsius) => (celsius * 9/10) + 32;

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(100));


