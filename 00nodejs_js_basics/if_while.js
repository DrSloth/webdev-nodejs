// JavaScripts control structures are very similiar to Pythons

// An if condition
if(10 > 5) {
    // This block is only executed if the condition is true
    console.log("Yay");
    // NOTE blocks are done with curly braces and not with indentation
} else if (10 == 10) {
    // Only executed if all previous conditions are false and this one true
    console.log("yay?");
} else {
    // Only executed if the if did not succed
    console.log("what?");
}

let x = 0;
while(x < 10) {
    // This is executed as long as the while condition 
    console.log(x);
    // Short for x = x + 1
    x += 1;
}
