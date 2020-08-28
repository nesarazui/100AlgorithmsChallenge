//brute force O(n^2)
function arrayChanges(inputArray: number[]): number {
    let moves = 0
    let finalSequenceComplete = isIncreasingSequence(inputArray)
    if (finalSequenceComplete){
        return moves
    } 

    let i = 0

    while (!finalSequenceComplete){
        if (i === inputArray.length - 1){
            i = 0
        }

        let num = inputArray[i]
        let nextNum = inputArray[i + 1]

        if (num >= nextNum){
            inputArray[i + 1] = inputArray[i + 1] + 1
            moves++
        }
        i++
        if (isIncreasingSequence(inputArray)) {return moves}
    }

    return -1
}

function isIncreasingSequence(arr: number[]): boolean{
    let val = -Infinity

    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= val){
          return false
        } else {
          val = arr[i]
        }
      }

      return true
}

//O(n)
function arrayChange(inputArray: number[]): number {
    let count = 0

    for (let i = 0; i < inputArray.length; i++){
        let num = inputArray[i]
        let nextNum = inputArray[i + 1]
        if (num >= nextNum){
            let diff = (num + 1) - nextNum
            inputArray[i + 1] = num + 1
            count += diff
        }
    }

    return count
}

console.log(arrayChange([1, 1, 1]));

console.log(arrayChange([1, 13, 1]))
