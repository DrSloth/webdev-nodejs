// We define a function async by adding the async keyword
const doSomethingAsync = async () => {
    return 10;
};
// We are not allowed to use await in the top scope so we define a main function
// const x = await doSomethingAsync(); <-- This is not allowed

const main = async () => {
    const p = doSomethingAsync();
    // p is not 10. It is a Promise which may resolve to the value 10 at some point.
    console.log(p);
    // doSomethingAsync already runs in the background but we can await its finish with await.
    const ten = await p;
    console.log(ten);
};

main();
