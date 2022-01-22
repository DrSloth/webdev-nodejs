// In JavaScipt we can use arrays to store multiple values, they are similiar to Python lists.

let arr = [1, "Hello", 2, true, [10, "bye"], 101];

// Arrays can be printed to the console
console.log(arr);

// We can index into the array with [], arrays start at 0
console.log(arr[0]);

// We can get the arrays length with array.length
console.log(arr.length);

// We can use the push method to push to the array
arr.push("Foo");
console.log(arr);

// We can also set undefined elements of the array
arr[arr.length] = 10;
console.log(arr);

// We can remove an element with the pop method
console.log(arr.pop())
console.log(arr)

// Access to an index out of bounds gives as undefined as value
console.log(arr[100]);
