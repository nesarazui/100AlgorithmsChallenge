function allLongestStrings(inputArray: string[]): string[] {
    let highest = 0
    let output = []
    for (let i = 0; i < inputArray.length; i++){
        let str = inputArray[i]
        if (str.length > highest){
            highest = str.length
        } 
    }

    for (let i = 0; i < inputArray.length; i++){
        let str = inputArray[i]
        if (str.length === highest){
            output.push(str)
        }
    }

    return output
}

// function allLongestStrings(inputArray: string[]): string[] {
//     let highest = 0
//     let output = []

//     inputArray.forEach((word: string) => {
//         word.length > highest? highest = word.length: null
//     })

//     inputArray.forEach((word: string) => {
//         word.length === highest? output.push(word): null
//     })

//     return output
// }

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));