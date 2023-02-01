function caesarCipher(string,num){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString ='';

    for(let i=0; i< string.length; i++){
        let char = string[i]
        let oldIndex = alphabet.indexOf(char)
        let newIndex = oldIndex + num
        let newChar = alphabet[newIndex % alphabet.length]
        newString += newChar
    }

    return newString
}
   
