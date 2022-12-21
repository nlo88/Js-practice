function dynamicFizzBuzz (max, num1, num2) {

    let result = []

    for (let i = 0; i < max; i++) {

        if (i % num1 === 0 && i% num2 !== 0) {
            result.push(i) 
        }

        if (i % num2 === 0 && i % num1 !== 0) {
            result.push(i)
        }
    }
    return result
}

console.log (dynamicFizzBuzz(20, 3,5));
