// var getSeven = function() {
//     return 7;
// };


// function useFunction(fn){
//     return fn();
// }

// useFunction(getSeven);


// console.log(useFunction(getSeven));

// function sum(x,y){
//     return x+y;
// }

// function subtract(x,y){
//     return x-y;

// }


// function multiply(x,y){
//     return x*y;

// }

// function divide(x,y){
//     return x/y;

// }
// function calculatorFunction(fn, x,y){
//     return fn(x,y);
// }



// // console.log(calculatorFunction(sum,32,5));
// // console.log(calculatorFunction(subtract,32,5));
// // console.log(calculatorFunction(multiply,32,5));
// // console.log(calculatorFunction(divide,32,5));


// function deliverProduct(name, callback){
//     console.log("Done with delivery"+ name);
//     callback();

// }


// function successFunction() {
//     console.log(" Prouduct has been successfully delviered");
// }

// deliverProduct("MacBOOK", successFunction);



// getProduct( 18, (product) =>{
//     getUserInfo(product.userId, (userInfo) =>{
//         getAddress(userInfo.userName, (address))
//     })
// })




function multiply7(){
    return function(x) {
       return x*7; 
    }
    

}


// const execFunc = multiply7();

// // console.log(execFunc(5));



// function sum(x){
//     return function(y){
//         return x+y;
//     }
// }


// console.log(sum(1)(2));
// console.log(typeof(sum(1)));


// var timedId = setInterval(function() {
//     console.log("WAKE UP ITs NIGHT AGAIN");
//     console.log(new Date());
//     clearInterval(timedId);
// }, 5000)


// //clearInterval(timedId);

setTimeout(function(){
    console.log("firstTask");
}, 1000);


setTimeout(function(){
    console.log("Second Task");
}, 5000);

setTimeout(function(){
    console.log("Third Task");
}, 3000);