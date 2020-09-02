function avoidObstacles(inputArray: number[]): number {

    let hash = {}
    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < inputArray.length; i++){
        let curr = inputArray[i]
        min = Math.min(min, curr)
        max = Math.max(max, curr)
        if (!hash[curr]){
            hash[curr] = true
        }
    }

    let startCount = 0 

    while (startCount <= max){
        startCount += min
        if (hash[startCount]) { 
            min++
            startCount = 0
        } 
    }

    return min
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
