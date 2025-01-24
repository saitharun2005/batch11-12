// let element = document.getElementById("demo");
// element.innerText="Google+";

// console.log(element);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello";
// ele[0].style.backgroundColor="red";

// let x=[...ele];
// console.log(x,Array.isArray(x));

// x.map(element=>{
//     element.innerText="Hello";
//     element.style.backgroundColor="tomato";
// })

// let ele = document.getElementsByTagName("div");
// console.log(ele);

// let ele = document.getElementsByName("formData");
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

// let ele = document.getElementById("mru");
// console.log(ele);



// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);


// let ele = document.querySelectorAll(".test");
// console.log(ele);


// let btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     console.log('Button clicked');
//     alert('Button clicked');
//     document.body.style.backgroundColor = 'red';
// })

// let btn = document.querySelector('#btn');
// btn.addEventListener('dblclick', () => {
//     console.log('Button Double clicked');
// })

let divBlock = document.getElementById('divBlock');
divBlock.addEventListener('onMouseOver', () => {
    document.body.style.backgroundColor = 'yellow';
    divBlock.style.backgroundColor = 'blue';
})

divBlock.addEventListener('onMouseLeave', () => {
    document.body.style.backgroundColor = 'yellow';
    divBlock.style.backgroundColor = 'blue';
})
