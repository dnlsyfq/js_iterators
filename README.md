# Iterators

> Iterators are methods called on arrays to manipulate elements and return values.

[MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)

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
