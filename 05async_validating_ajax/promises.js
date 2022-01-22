// Some things cant be done using async functions. For that purpose we have to use Promises
const sleep1s = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve()
    }, 1000);
});

const main = async () => {
    await sleep1s;
    console.log('finished');
};

main();
