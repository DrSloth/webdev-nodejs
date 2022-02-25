// Creating a promise is done with the Promise constructor. You can call it with the new keyword.
// Promises take a callback function which takes two callbacks as paramter. The first is called to resolve
// a promise and the second one is called to reject a promise.
const allwaysResolves = new Promise((resolve, _reject) => {
    // Passing a parameter to the resolve functions is the same as returning that value in normal functions.
    resolve(10); 
});

// With the older .then API we can wait for a promise to resolve and then do something

allwaysResolves.then((ten) => console.log(`This value (${ten}) is the 10 passed to resolve`));

const allwaysRejects = new Promise((_resolve, reject) => {
    // Passing a parameter to reject is the same throwing an error
    reject("Bad bad error");
});

// Rejections can be catched with the .catch function
allwaysRejects
    .then((_never) => console.log("This will never execute"))
    .catch((error) => console.log(`Oh no an error: ${error}`));
