function fibonacci(length) {
    
    if (length === 0) {
        return [];
    }
     else if (length === 1) {
         return [1];
    }
    
     let newArray = [1,1];
     
    for (; newArray.length< length;){
        
        let lastPosition = newArray[newArray.length - 1]
        let secondToLastPosition = newArray[newArray.length -2]
       
        let nextElement = lastPosition + secondToLastPosition
        
        newArray.push(nextElement)
    }
    
    return newArray;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]