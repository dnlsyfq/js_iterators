const numbers = [1,2,4,10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(summedNums);

const summedNumsPlus = numbers.reduce((acc,curr) => {return acc + curr},100)

console.log(summedNumsPlus);

