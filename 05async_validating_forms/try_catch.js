// Thrown errors can be caught using try and catch akin to pythons try except.
// Code in the try will be executed until an error is encountered, then the catch will execute.

const alwaysErrors = () => {
    throw "Very bad Error";
};

try {
    console.log("This will be executed");
    alwaysErrors();
    console.log("This will not be executed");
} catch(e) {
    console.log(`An error occured: ${e}`)
}
