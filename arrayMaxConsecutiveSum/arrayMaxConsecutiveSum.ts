function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let max = -Infinity
    let currentSum = 0

    for (let i = 0; i < inputArray.length; i++){
        currentSum += inputArray[i]
        if (i >= k - 1){
            max = Math.max(max, currentSum)
            currentSum -= inputArray[i - (k - 1)]
        }
    }
    return max
}


//Brute Force
// function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
//     let currMax = -Infinity

//     for (let i = 0; i <= inputArray.length - k; i++){
//         let sum = 0
//         for (let j = 0 + i; j < i + k; j++){
//             sum += inputArray[j]  
//         }
//         if (sum > currMax){
//             currMax = sum
//         }
//     }
//     return currMax
// }



console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

