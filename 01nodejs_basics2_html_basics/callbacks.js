// Callbacks are a very important concept in JavaScript. Callbacks are functions used as parameters
// for higher order functions and determine what to do with the result the higher order function
// generated. They are "called back" after the other function is finished.

const calc_very_complex_number = (callback) => {
    let x = 2;
    callback(x+2);
};

const callback_function = (x) => {
    if(x == 4) {
        console.log("2 + 2 is fish");
    }
};

calc_very_complex_number(callback_function)
// Use inline callback 
calc_very_complex_number((x) => console.log(`No it is ${x}`))
