Concurrent code is a relatively abstract, but very important and useful, concept.
The main concept of concurrency is that multiple tasks can be done at once
**even when you don't have access to multiple hardware threads**.

The concept can be made clear with a very simple example: Making a toast with fried egg.

## Sync/Sequential code
Normal code is considered to run sequential (sync).
This means that tasks which are long running but don't need attendance have to be waited on, 
the time which could be used somewhere else is wasted.

When making a toast with fried eggs you first have to take bread and toast it and wait for the toaster to finish, 
before you can even start with frying the eggs. You then have to wait for the eggs to be fried before you can put
it on to the toast. When waiting for the toaster or the eggs to finish you can do **NOTHING** else.
The flow can be seen visualized in [./sync.png]

## Multi threaded code
This wasted time can be mitigated by using parallelism (multi threaded).
Multi threaded code has the advantage that multiple hardware threads, which can all achieve the
same tasks, can be used. This approach generally is better than sync code for long wasted wait times,
but this still is not the best approach as the number of hardware threads is small and 
creating/instantiating them also costs a lot of time. The wasted time just gets put on to multiple threads.

When making a toast with fried eggs you first create a clone of yourself. One of the clones
fries the egg and the other one toasts the bread, while doing this both clones do **NOTHING** else.
After both clones are finished they are connected back into one and the eggs can be put on the bread and eaten.
The flow can be seen visualized in [./multithreaded.png]

## Async code
Eleminating this time as much as possible can be done by using concurrent code (async).
Async code uses various techniques to do other stuff while a thing that doesn't need attendance is
performed. JavScript is actually very async as we have already seen with all functions of the fs module
or frontend functions such as setTimeout or setInterval. While they are async in nature they don't use 
JavaScripts actual async system which are called Promises (this is because these functions predate Promises).

When making a toast with fried eggs in an async manner you first put bread into the toaster and directly continue with
cracking eggs in to the frying pan. You then attend whatever else you have to do, you just check the eggs and toast
from time to time. This continuous check wether something is ready is called `poll`ing.
When you notice that both the eggs and toast are finished you can put the eggs on the toast and eat.

