// // var coursesInCart = ["javs", "C", "pthon", "C++"];


// // coursesInCart.forEach((item, idx) =>{
// //     console.log(item, idx);
// // });


// var coursesInCart = [{ name: "javs" }, { name: "C" }, { name: "python" }, { name: "C++" }];



// coursesInCart.forEach((item, idx) =>{
//     console.log(item.name, "Position: "+ idx);
// // })

// // Using for each
// const prices = [ "1000", "1500", "3500", "2500"]
// var output = [];

// prices.forEach(function(item){
//     output.push(item*0.5);
// });

// console.log(output);

// // USING MAP


// const newPrices = prices.map(function(item, idx) {
//     return Number(item) * 0.5;
// })

// console.log(newPrices)


const prices = [ 1000, 1500, 3500, 2500];




const filteredPrices= prices.filter(function(item, idx){
    if(item<2000){
        return true;
    }
    return false;
})


console.log(filteredPrices)



var coursesInCart = ["javs", "C", "pthon", "C++"];

const namesLessThanThree = coursesInCart.filter(function(item, idx){
    if (item.length < 5){
        return true;
    }
    return false;
})

console.log(namesLessThanThree);