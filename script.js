// Creo il loop che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // SE il numero risulta un multiplo di 3 e il multiplo di 5 
    if (i % 3 === 0 && i % 5 === 0){
        // allora stampo FizzBuzz
        console.log("FizzBuzz")
        // ALTRIMENTI SE il numero risulta multiplo di 3 
    } else if (i % 3 === 0){
        // allora stampo solo Fizz
        console.log("Fizz")
        // ALTRIMENTI SE il numero risulta multiplo di 5 
    } else if (i % 5 === 0){
        // allora stampo solo Buzz
        console.log("Buzz")
        // ALTRIMENTI vado 
    } else {
        console.log(i)
    }
}
    
