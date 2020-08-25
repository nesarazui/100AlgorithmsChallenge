function addTwoDigits(n: any): number {
  let stringified = n.toString()  

  let firstNum = stringified[0]
  let firstNumConversion = parseInt(firstNum, 10)
  let secondNum = stringified[1]
  let secondNumConversion = parseInt(secondNum, 10)
  let combinedNum = firstNumConversion + secondNumConversion

  return combinedNum

}

function addDigits(n: any): number {
    let stringified = n.toString() 
    let splitNums = stringified.split('')

    let total = 0;
    splitNums.forEach((stringifiedNum) => {
        let num = parseInt(stringifiedNum, 10)
        total += num
    })

    return total
  }

console.log(addTwoDigits(29));
console.log(addDigits(2925));