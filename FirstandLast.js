// Write a function firstAndLast that takes in an array of 
// numbers and returns the sum of the first and last element 
// if there is an even number of elements in the array. 
// If there is an odd number of elements in the array, 
// then the function should return the difference between 
// the first and last elements of the array.

// 1. write function that takes in an array of numbers
// 2. Check if the first element and Last element contain even numer
// 3. return the sum
// 4. if there is odd number
// 5. return the difference
// 6. return 0 if not found

function firstAndLast(array) {
    
   
    let firstIndex = array[0]
    let lastIndex = array[array.length -1]
   
    //console.log(firstIndex)
    //console.log(lastIndex)
   
    if (array.length % 2 === 0 ) {
       return firstIndex + lastIndex
    }
    
    else  {
        return firstIndex - lastIndex
    }
 
};


console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4