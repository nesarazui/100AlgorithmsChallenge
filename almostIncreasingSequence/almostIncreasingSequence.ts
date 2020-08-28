//brute force: O(n^2) time
function almostIncreasingSequence(sequence: number[]): boolean {
    for (let i = 0; i < sequence.length; i++){
        let numToRemove = sequence[i] 
        let seqCounter = -Infinity

        for (let j = 0; j < sequence.length; j++){
            let numToEval = sequence[j] 
            if (j === i) {
                continue
            } else {
                if (numToEval > seqCounter) {
                    seqCounter = numToEval
                    if (j === sequence.length - 1){
                        return true
                    }
                } 
            } 
        }
    }

    return false
}



console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 


