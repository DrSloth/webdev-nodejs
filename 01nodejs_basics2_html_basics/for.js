// JavaScript supports three kinds of for loops

let arr = [1,"hello", false];
let obj = {a: "world", b: 10, c: true};

// The "classical" for loop
// This is the same as pythons `for i in range(0,10):`
for(let i = 0;i < 10;i++) {
    console.log(i);
}

console.log("-----------------------");

// we can use this to iterate over an array, we would use array.length then
for(let i = 0;i < arr.length;i++) {
    console.log(arr[i]);
}

console.log("-----------------------");

// This also works for strings

let s = "Hello!";
for(let i = 0;i < s.length;i++) {
    console.log(s[i]);
}

console.log("-----------------------");

// The for in loop to loop over keys
for(const i in arr) {
    console.log(i);
}

console.log("-----------------------");

// The for of loop to loop over values
for(const i of arr) {
    console.log(i);
}

console.log("-----------------------");

// The for in also works for objects

for(const i in obj) {
    console.log(i);
}

console.log("-----------------------");

// For of does not work the following is not allowed:
/* for(const i of obj) {
    console.log(i);
} */

// Use Object.entries instead
for(const [k,v] of Object.entries(obj)) {
    console.log(`${k}: ${v}`)
}

console.log("-----------------------");
