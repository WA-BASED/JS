
// function sum (x, y) {
//     return x+y;
// }
// console.log(sum(1,10));


const nameRef = document.getElementById('name');
console.log(nameRef);

const descriptionRef = document.getElementsByClassName('description')[0];

// console.log(descriptionRef[0]);

// nameRef.innerHTML = "WaSeeM";
descriptionRef.innerHTML = "YELLOW";

document.getElementsByClassName('descr')[0].innerHTML = "MELLOW";


const nameNode = document.createElement('h2');

nameNode.id = 'name';

const bodyRef = document.querySelector('body');
// bodyRef.append(nameNode);
bodyRef.prepend(nameNode);


//remove child
//.textContent
// classList.add, remove

//.style.color, .style.fontsize
// eventListenter

const buttonNode = document.createElement('button');
buttonNode.innerHTML= 'Apply for being my girlfriend';
// buttonNode.addEventListener(Even_Name, Function/Callback)


buttonNode.addEventListener('click', function(){
    // alert('Thanks for showing thy interest')
    window.open('https://www.google.com', '_blank')
});

buttonNode.addEventListener('hover', function(){
    alert('Thanks for showing thy interest')
    
});
bodyRef.append(buttonNode);

