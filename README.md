# Iterators

> Iterators are methods called on arrays to manipulate elements and return values.

[MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)

### Truthy , Falsy

```
let tool = '';
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'; // left first then right

console.log(`The ${writingUtensil} is mightier than the sword.`);
```

### Ternary operator

```
let isNightTime = true;
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```

### switch

```
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
```


## Method 

### .forEach
* execute the same code for each element of an array.

* method 1
```
groceries.forEach(groceryItem => console.log(groceryItem));
```

* method 2
```
function printGrocery(element){
    console.log(element)
}

groceries.forEach(printGrocery)
```

### .map
* execute the same code for each element of an array.
* returns a new array

```
const numbers = [1,2,3,4,5]

const bigNumbers = numbers.map(number => {
    return number * 10;
});


```

### .filter

* returns an array of elements after filtering out certain elements from the original array. 
* The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.

```
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});
```

```
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(n => {
  return n < 250
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(w => {
  return w.length > 7
})

```


### .findIndex

* to find the location of an element in an array
* .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

```
const jumbledNums = [123,25,78,5,9];

const lessThanTen = jumbledNums.findIndex(
    num => { return num < 10}
)

console.log(jumbledNums[lessThanTen]);
```

> If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

```
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

```

```
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(a => {
  return a === 'elephant'
})

const startsWithS = animals.findIndex(a => {
  return a[0]==='s'
})
```

### .reduce
* returns a single value after iterating through the elements of an array

```
const numbers = [1,2,4,10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(summedNums);
```

* The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!)

```
const summedNumsPlus = numbers.reduce((acc,curr) => {return acc + curr},100)

console.log(summedNumsPlus);
```


```
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue)=>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
},10)

console.log(newSum)

```


### .some
*  tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];



console.log(words.some((word) => {
  return word.length < 6;
}));

```

### .every
* every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
```
