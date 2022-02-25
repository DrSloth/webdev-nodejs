Asynchronicity in general is defined by doing multiple things at once but not necessarily in 
multiple os or hardware threads. As already mentioned Node js is very asynchrounous.
As we have seen so far this is mainly used through callbacks, this results in very 
deep nesting and something called 'callback hell'. 

JavaScripts actually provides two better approaches towards async code
1. The promise .then api
2. async/await
We will take a look at async/await here.
