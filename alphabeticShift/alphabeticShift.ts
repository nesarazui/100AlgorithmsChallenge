function alphabeticShift(inputString: string): string {
    let newStr = ''

    for (let i = 0; i < inputString.length; i++){
        let letter = inputString[i]
        let val = inputString.charCodeAt(i)
        if (val === 122) {
            newStr += 'a'
        } else {
            let updatedLetter = String.fromCharCode(val + 1)
            newStr+= updatedLetter
        }
    }

    return newStr
}

// function alphabeticShift(inputString: string): string {
//     let newStr = ''
//     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//     for (let i = 0; i < inputString.length; i++){
//         let letter = inputString[i]
//         console.log(letter)
//         let index = alphabet.indexOf(letter)
//         console.log(index)
//         let newLetter = ''
//         if (index !== 25){
//          newLetter = alphabet[index + 1]
//         } else {
//          newLetter = 'a'
//         }
//         newStr += newLetter
//     }
//     return newStr
// }

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abcd'))