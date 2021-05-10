
const groceries = ['brown sugar','salt','cranberries','walnuts'];

// no callback
groceries.forEach((item)=>{
    console.log(`First method - ${item}`)
})

// with callback

const printGrocery = item => {console.log(`Second method - ${item}`)}

groceries.forEach(printGrocery);