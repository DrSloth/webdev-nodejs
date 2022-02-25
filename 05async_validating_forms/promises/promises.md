JavaScripts main way to write async code is using promises. A promise can be thought of as
a certificate (or promise ;)) that something wille be ready in the future. 

When you execute a normal function in JavaScript you go and do something by yourself.
You can either succeed and return a value or have an error and throw.

With promises this is similar. Instead of doing something yourself you contract someone else
to do it for you. This person promises you that they will succeed in doing what you told them.
This promise can either be held, in JavaScript we call this resolved, or the person can fail
accomplishing the task, in JavaScript this is called rejection.

You can contract multiple people to do something for you at the same time, you can `await` one of the contractors
to receive their result when you need it.

There are also ways to make promises about promises, for instance the `Promise.all` function promises that all the 
promises it got as parameter (in an array) will be held. If one of these promises fails `Promise.all` will fail too.
