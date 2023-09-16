var car1 = {
    name: "honda city",
    manufacture: "honda",
    fuelCapacity: '40L',
    isAutomatic: false,

}


var car2 = {
    name: "Dzire",
    manufacture: "suzuki",
    fuelCapacity: '45L',
    isAutomatic: true,
}


// console.log(car1.isAutomatic, car1['isAutomatic']);

// var myDetail= {
//     name: "Waseem",
//     title: "Student at UF",
//     expertise: "SAY MY NAME",


// }

// var myDetail = new Object();

// myDetail.name = "waseem";

// myDetail.greetMe= function () {
//     console.log("YOU PRINTED THE INSIDE FUNCTION");
// }

// console.log(myDetail.greetMe());



//OBJECT USING CONSTRUCTOR METHOD


function Course(title, lang) {
    this.title = title;
    this.language = lang;
}

var javascript = new Course("waseeM", "Hinglsih");

console.log(javascript);