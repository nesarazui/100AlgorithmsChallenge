function alphabetSubsequence(s: string): boolean {
    let val = s.charCodeAt(0)
    for (let i = 1; i < s.length; i++){
        let currentVal = s.charCodeAt(i)
        if (currentVal <= val){
            return false
        } else {
            val = currentVal
        }
    }
    return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
