// Because working with Promises is quite tedious we should prefer async functions 

// Async functions are created with the async modifier
const async_function = async () => {
    // Same thing as resolve(10) in previous example
    return 10;
};

// We can not use await in the top level so we use a function to do that.
// (opinion) Having such an entry point function make the code more readable in my opinion
const main = async () => {
    // This is a promise
    let prom = async_function();
    console.log(prom);
    // With await we can wait until a promise is resolved
    let ten = await prom;
    console.log(ten);
};

// node js will stop when all promises are resolved
main();
