const jumbledNums = [123,25,78,5,9];

const lessThanTen = jumbledNums.findIndex(
    num => { return num < 10}
)

console.log(jumbledNums[lessThanTen]);

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant'
})

const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's'
})