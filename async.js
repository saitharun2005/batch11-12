// function demo ()
// {
//     console.log("start");
//     console.log(10);
//     console.log(20);
//     console.log(30);        
//     console.log(40);
//     console.log("end");
// }
// demo();

// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("success");
//     },5000);
// })

// async function demo (){
//     console.log("Start");
//     let x=await p;
//     console.log(x);
//     console.log("End");
// };
// demo()


async function fetchUsers()
{
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    let data =await response.json();
    console.log(data);
}
fetchUsers();
