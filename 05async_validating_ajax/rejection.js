// Promises may be rejected to denote errors

const allwaysReject = () => {
    // it is very common to return Promises from functions
    return new Promise((resolve, reject) => reject("DENIED"));
}

const main = async () => {
    // Rejection is the same as a thrown error
    try {
        console.log("This will be executed");
        await allwaysReject();
        console.log("This will not be executed");
    } catch(e) {
        console.log(`An error occured: ${e}`)
    }
};

main();
