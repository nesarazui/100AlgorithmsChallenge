
function arrayConversion(inputArray: number[]): number {

    if (inputArray.length === 1) {
        return inputArray[0]
    }

    let workingArr = []
    let finalArr = []
    for (let i = 0; i < inputArray.length; i++){
        let num = inputArray[i]
        let nextNum = inputArray[i + 1]
        if (i % 2 === 0){
            workingArr.push(num + nextNum)
        }
    }

    if (workingArr.length !== 1) {
        for (let i = 0; i < workingArr.length; i++){
            let num = workingArr[i]
            let nextNum = workingArr[i + 1]
            if (i % 2 === 0){
                finalArr.push(num * nextNum)
            }
        }
        return arrayConversion(finalArr)
    } else {
        return arrayConversion(workingArr)
    }

}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));