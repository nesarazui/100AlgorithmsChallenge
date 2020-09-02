function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxAbs = -Infinity

    for (let i = 0; i < inputArray.length - 1; i++){
        let currMaxAbs = Math.abs(inputArray[i] - inputArray[i + 1])
        maxAbs = Math.max(maxAbs, currMaxAbs)
    }

    return maxAbs
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));