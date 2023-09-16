// var getSeven = function() {
//     return 7;
// };


// function useFunction(fn){
//     return fn();
// }

// useFunction(getSeven);


// console.log(useFunction(getSeven));

function sum(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;

}


function multiply(x,y){
    return x*y;

}

function divide(x,y){
    return x/y;

}
function calculatorFunction(fn, x,y){
    return fn(x,y);
}



console.log(calculatorFunction(sum,32,5));
console.log(calculatorFunction(subtract,32,5));
console.log(calculatorFunction(multiply,32,5));
console.log(calculatorFunction(divide,32,5));
