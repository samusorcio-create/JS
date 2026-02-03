
const somma = (x, y) => x + y;
const moltiplica = (x, y) => x * y;

function eseguiOperazione(x, y, operazione){
    return operazione(x,y);
}

console.log(eseguiOperazione(5, 3, somma)); // 8
console.log(eseguiOperazione(5, 3, moltiplica)); // 15