//Iteration 1: Names and Input
const driver = 'Ana';
console.log(driver)
console.log('The drivers name is ${driver}')
const navigator = 'Rita'
console.log(navigator)
console.log('The navigators name is ${navigaror}')

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log ('The driver has the longest name, it has 3 characters.')
} else if ( driver.length === navigator.length) {
    console.log ('wow, you both have equally long names, 3 characters!')
} else if ( driver.length < navigator.length ) {
    console.log ('It seems that the navigator has the longest name, it has 4 characters.')
}

// Iteration 3: Loops
for (let i= 0; i < driver.length; i++)
console.log(driver.toUpperCase().split("").join(" "))

for (let i= 0; i > driver.length; i--)
