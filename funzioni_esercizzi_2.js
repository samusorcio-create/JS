
let m = 0;

function sommaFinoA(n){
    
    if(n < 1){
        return "monkey"
    }
    m = m + n
    return sommaFinoA(n-1);
}

console.log(sommaFinoA(5));
