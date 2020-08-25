function adjacentElementsProduct(inputArray: number[]): number {
    let highestProduct = -Infinity

    for(let i = 0; i < inputArray.length - 1; i++){
        let currentNum = inputArray[i]
        let adjacentNum = inputArray[i + 1]
        let product = currentNum * adjacentNum

        if (product > highestProduct) {
            highestProduct = product
        }
    }

    return highestProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));