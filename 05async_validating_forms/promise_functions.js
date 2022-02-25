// There are many useful functions to operate on arrays of promises. 
// Most of the functions are associated with the Promise object directly.
// Because these function operate on promises they are usable with async/await.
// A more complete documentation can be found at:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const print = async (e) => {
    // This resolves directly
    console.log(e);
    return e;
};

const sleepPrint = (ms, toPrint) => {
    return new Promise((resolve, _reject) => {
        console.log(`${toPrint} after ${ms}ms`);
        setTimeout(() => resolve([ms, toPrint]), ms);
    });
};

const createPromises = (toPrint) => {
    return [
        print(toPrint), 
        sleepPrint(100, toPrint),
        sleepPrint(500, toPrint),
        sleepPrint(1000, toPrint),
    ];
};

const main = async () => {
    let res = null;
    const race = createPromises("race 1");
    // Execute all Promises, return when the first promise finishes and return its result.
    res = await Promise.race(race);
    console.log(`Finished race with ${res}`);

    const all = createPromises("all");
    // Wait until all promises are resolved, or one is rejected. 
    res = await Promise.all(all);
    console.log(`Finished all with ${res}`);

    // Directly resolve with a value
    res = await Promise.resolve("hello");
    console.log(`${res}`);

    try {
        // Directly reject with a value
        res = await Promise.reject("rejected");
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};

main();
