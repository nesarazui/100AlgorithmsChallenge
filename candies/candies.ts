function candies(n: number, m: number): number {
 let remainder = m % n

 return m - remainder
}

console.log(candies(3, 10));