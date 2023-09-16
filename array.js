var names= ['sdfk', 213, null];

var jobs = ['Web dev', 'full stack', 'frontend'];

var jobs = new Array("Web dev", "FLL stack", "FRONTEND DEV")

console.log(jobs[-2]);



for (const j of jobs){
    console.log(j);
}


var d = [1,2,3,4,5,6,7,8,9,10];

// for(const x of d){
//     if (x===3){
//         d.push(3);
//     }
// }

// for (const x of d){
//     console.log(x);
// }

//start index , no. of items to delelte onwards
var k= d.splice(4,5);

d =d.concat(k);

//d = d.join("###");
console.log(d.reverse());

//console.log(d.indexOf(32));


for (var x in d){
    console.log(x);
}