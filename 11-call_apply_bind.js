/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
    return [...arrayLikeObject];
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments(){
    var evenNumbers = [].filter.call(arguments, function(value){
        return value%2 === 0;
    });
    var sum = 0;
    evenNumbers.forEach(function(value){
        sum += value;
    });
    return sum;  
}

 
//Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

function invokeMax(fn, num){
    var count = 0;
    return function (...args){
        if (count < num){
            count++;
            return fn(...args)
        }
        else{
            return "Maxed Out!"
        }
    }
}


//Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.
function once(fn, thisArg){
    var didRun = false;
    return function(...args){
        if (!didRun){
            didRun = true;
            return fn.call(thisArg, ...args);
        }
        return undefined;
    }
}

//Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
function bind(fn, thisArg, ...initialArgs){
    return function(...invokedArgs){
        return fn.apply(thisArg, [...initialArgs,...invokedArgs]);
    };
}

//Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 
function flip(fn, thisArg, ...initialArgs){
    return function(...nextArgs){
        var args = initialArgs.concat(nextArgs).slice(0,fn.length).reverse();
        return fn.apply(thisArg, args);
    };
}
