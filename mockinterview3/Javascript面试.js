1.Object.assign()

copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

2.Import VS require in JS (N)


import
Can select the method you want
3asynchronous(without waiting for previous import)

require
4can't selectively load
synchronous(step by step) 


5Difference of let and var
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.
Hoisting of var and let:
All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined , 
but let and const declarations remain uninitialized. 
They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine.


6render prop
The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
 A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.


7Evenet Loop:
 An event loop is a loop that can register tasks to be executed, execute them, delay or even cancel them and handle different events related to these operations. Generally, we schedule multiple async functions to the event loop. The loop runs one function, while that function waits for IO, it pauses it and runs another.

 8 Slice and splice

 S LICE = Gives part of array & NO splitting original array
 
 SP LICE = Gives part of array & SPlitting original array

9.Code splitting is one of the most compelling features of webpack. 
This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel.

10.Bind and call:
The difference between call() and bind() is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, 
while the bind() creates a copy of that function and sets the this keyword.

11.How To Use Object Methods in JavaScript
Objects in JavaScript are collections of key/value pairs. ...
keys() creates an array containing the keys of an object.
values() creates an array containing the values of an object.
entries() creates a nested array of the key/value pairs of an object.
assign() is used to copy values from one object to another.

12.disadvantage arrow functions:
You can’t use an arrow function when a dynamic context is required: 
defining methods, 
creating objects with constructors, 
getting the target from this when handling events.

13.Jenkins
Jenkins is a free and open source automation server. 
It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.

how to create Jenkins:
To get started, head to the Jenkins Dashboard and click New Item. Name the new item “Shell Test (Workflow)”, and select the Workflow type. Click OK to create the new project. You'll land on the project's configuration page.

14.Gulp and grunt:
Gulp: configuration Json

