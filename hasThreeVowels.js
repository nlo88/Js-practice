function hasThreeVowels(str){
    let vowel = 'aieou'
    let vowelCount = 0;
    for (let i=0; i<str.length; i++){
        let char = str[i]
        if (char === vowel){
            vowelCount++
        }
    }
    return vowelCount > 3
}

console.log(hasThreeVowels)