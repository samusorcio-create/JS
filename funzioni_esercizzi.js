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

let ccalcolaImc = (peso, altezza) => peso / (altezza * altezza);

console.log(ccalcolaImc(70, 1.75));
console.log(ccalcolaImc(85, 1.80));

function maggiore(a, b){
    if(a < b){
        return( `ilvalore piu grande è ${b}` )
    }else{
        return( `ilvalore piu grande è ${a}` )
    }
}

console.log(maggiore(70, 75));
console.log(maggiore(85, 80));

function pariODispari(numero){
    var striga = ""
    if(numero %2 === 0){
        for (let i = 0; i < numero ;i++){
            stringa += "0"
        }
    }else{
        for (let i = 0; i < numero ;i++){
            stringa += "0"
        }
    }
}

// function applicaSconto(prezzo, percentualeSconto){

// }

//3,14

function areaCerchio(raggio){
    return Math.PI * (raggio * raggio)
}

function doppiaAreaCerchio(valore){
    return areaCerchio(valore) + areaCerchio(valore)
}
