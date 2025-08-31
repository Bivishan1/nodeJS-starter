// var a = 20;
// console.log('it:',a);

//declaring iffe function,that called the function expression by itself.
//and only inside it's function scope, the variable is available otherwise not in the outside like in the following.
// so like it won't available in the global scope to call in the second file like we doing before without using iffe function.
// so this concept is called moduler concept pattern where each file is encapsulated..

// By default every file is encapsulated or separated in NodeJS file.

// The idea of encapsulation is called module in NodeJS.

// That means in NodeJS when you declare something then by default it's not available to other file.

// So this separation is called module in NodeJS.
(function() {
    var a = 55;
    console.log('inside function:', a);
})();

console.log('outside function:', a);