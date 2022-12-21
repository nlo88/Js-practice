function isPrime (n) {
    let prime = Math.floor(Math.sqrt(n));

    for(let i=2; i <= prime; i++){
        if(n % i === 0) {
            return false 
        }
    }

    return true
}

console.log(isPrime(2));
console.log(isPrime(10)); 
console.log(isPrime(11)); 
console.log(isPrime(9)); 
console.log(isPrime(2017)); 