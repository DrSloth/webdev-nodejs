// Some things cant be done using async functions. For that purpose we have to use Promises
const sleep1s = new Promise((resolve, _reject) => {
    setTimeout(() => {
        // It is not possible to "delay" a return use the resolve function for that
        resolve();
    }, 3000);
});

const main = async () => {
    await sleep1s;
    console.log('finished');
};

main();
