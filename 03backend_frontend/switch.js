// A switch can be used to as alternative to multiple if/else if

const x = 10;
switch(x) {
    //Declare a case with the case keyword
    case 0:
        console.log('x is zero');
        //Cases have to be ended with a break
        break;
    //You can provide multiple cases, only use this withing reason
    case 1: 
    case 2:
    case 3:
        console.log('x is between 1 and 3');
        break;
    case 10:
        console.log('x is ten');
        break;
    //The default if no other case matched
    default: 
        console.log(`x is ${x}`);
        break;
}
