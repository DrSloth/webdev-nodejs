// Similiar to python javascript also supports functions they can be declared in two different ways

// Define function using the `function` keyword. 
function double(x) {
    return x * 2;
}

// The function keyword is the older way to define functions. Sometimes using this method is 
// required because of compatibility reasons and because the two ways have differences but
// they are a little more complicated so we get to them later.

//The preffered way nowadays to define functions is using the arrow (=>) operator
const triple = (x) => x*3;

const print_all_twice = (arr) => {
    for(let i = 0;i < arr.length;i++) {
        console.log(arr[i]);
        console.log(arr[i]);
    }
};

console.log(`2 doubled is ${double(2)}`);
console.log(`2 tripled is ${triple(2)}`);
print_all_twice([1,2,"hello", false])
