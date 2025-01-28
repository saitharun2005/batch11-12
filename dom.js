// // // let element = document.getElementById("demo");
// // // element.innerText="Google+";

// // // console.log(element);

// // // let ele = document.getElementsByClassName("test");
// // // console.log(ele);
// // // console.log(Array.isArray(ele));
// // // ele[0].innerText="Hello";
// // // ele[0].style.backgroundColor="red";

// // // let x=[...ele];
// // // console.log(x,Array.isArray(x));

// // // x.map(element=>{
// // //     element.innerText="Hello";
// // //     element.style.backgroundColor="tomato";
// // // })

// // // let ele = document.getElementsByTagName("div");
// // // console.log(ele);

// // // let ele = document.getElementsByName("formData");
// // // [...ele].map(inp=>{
// // //     console.log(inp.value);
// // // })

// // // let ele = document.getElementById("mru");
// // // console.log(ele);



// // // let ele = document.querySelector("#mru");
// // // console.log(ele);

// // // let ele = document.querySelector(".test");
// // // console.log(ele);


// // // let ele = document.querySelectorAll(".test");
// // // console.log(ele);


// // // let btn = document.querySelector('#btn');
// // // btn.addEventListener('click', () => {
// // //     console.log('Button clicked');
// // //     alert('Button clicked');
// // //     document.body.style.backgroundColor = 'red';
// // // })

// // // let btn = document.querySelector('#btn');
// // // btn.addEventListener('dblclick', () => {
// // //     console.log('Button Double clicked');
// // // })

// // // let divBlock = document.getElementById('divBlock');
// // // divBlock.addEventListener('onMouseOver', () => {
// // //     document.body.style.backgroundColor = 'yellow';
// // //     divBlock.style.backgroundColor = 'blue';
// // // })

// // // divBlock.addEventListener('onMouseLeave', () => {
// // //     document.body.style.backgroundColor = 'yellow';
// // //     divBlock.style.backgroundColor = 'blue';
// // // })

// // // let ele = document.createElement("h1");
// // // ele.innerText="My name is nithish";
// // // ele.id="demo";
// // // console.log(ele);

// // // let ele= document.createElement("h1");
// // // ele.innertext="My name is nithish";
// // // ele.id="demo";
// // // console.log(ele);

// // // let image= document.createElement("img");   
// // // image.src="./776477ceb80263933b6e6576d87bc9b4.jpg";
// // // console.log(image);

// // // document.body.appendChild(ele);
// // // document.body.appendChild(image);
// // // // document.body.appendChild(ele);

// // let form = document.querySelector("form");
// // let username = document.getElementById('uName');
// // let mail = document.getElementById("uMail");
// // let psw =  document.getElementById("uPass");



// // form. addEventListener("submit",(event)=>{
// //     event.preventDefault();
// //     let uname = username.value;
// //     let uemail = mail.value;
// //     let upass = psw.value;
// //     let userDetails={
// //         uname, uemail, upass
// //     }
// //     console.log(userDetails);
// //     localStorage.setItem("userData", JSON.stringify(userDetails))

// // })

// // let vd = document.createElement("video");
// // vd.setAttribute("src","./video.mp4");
// // vd.setAttribute("controls","controls");
// // console.log(vd);

// // document.body.appendChild(vd);



// // let h1= document.createElement("h1");
// // h1.setAttribute("id","demo");
// // h1.innertext="My name is nithish";
// // console.log(h1);

// // document.body.appendChild(h1);

// // let vd=document.createElement("video");
// //!
// let mainEle=document.createElement("div");
// mainEle.setAttribute("id","mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";


// console.log(mainEle);


// let topEle=document.createElement("div");
// topEle.setAttribute("class","topblock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src="./776477ceb80263933b6e6576d87bc9b4.jpg";
// image.style.width="550px";


// let botEle=document.createElement("div");
// botEle.setAttribute("class","bottomBlock");
// // console.log(botEle);

// let h1=document.createElement("h1");
// h1.innerText="Rohith Sharma 45";
// h1.style.textAlign="center";

// let btn = document.createElement("button");
// btn.innerText="Click me";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="blue";
// btn.style.color="white";

// botEle.appendChild(h1);
// botEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(botEle);
// document.body.appendChild(mainEle);


let form = document.querySelector("form");

let username = document.getElementById('uName');
let password =  document.getElementById("uPass");


let check=document.getElementById("check");
let show=document.getElementById("show");

let gender= document.getElementsByName("gender");

check.addEventListener("click", event=>{
    if(event.target.checked == true){
        password.setAttribute("type","text");
        show.innerText="Hide Password";
    }else{
        password.setAttribute("type","password");
        show.innerText="show Password";
    }
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.value;
    let upass = password.value;
    // let ugen = gender.value;

    for(let i=0;i<=gender.length-1;i++){
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            gen = gender[i].value;
        }
    }

    let userDetails={
        username:uname,
        password:upass,
        gender:gen
    }

    console.log(userDetails);
    localStorage.setItem("userData",
        JSON.stringify(userDetails))

})