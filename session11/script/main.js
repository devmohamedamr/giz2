// var jsondata = 
// console.log(jsondata);

// 1
var ajax = new XMLHttpRequest;

// 2 

// ajax.open("GET","https://api.github.com/users/radwaokaily");

// // 3
// ajax.send();

// // 4
// ajax.onreadystatechange = function(){

//     if(ajax.readyState == 4){
//         var res = JSON.parse(ajax.response);   
//         console.log(res)
//     }
//     document.getElementById("img").src = res.avatar_url;
// }



// fetch("https://jsonplaceholder.typicode.com/users" , {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
// }).then((res)=>{
//     console.log(res.response);
// });


// document.getElementById("click").onclick = function () { 
//     var username =  document.getElementById("username").value;
//     var ajax = new XMLHttpRequest;
//     ajax.open("GET",`https://api.github.com/users/${username}`);
//     ajax.send();
//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4){
//             var res = JSON.parse(ajax.response);
//             // console.log();
//             document.getElementById("img").src = res.avatar_url;
//         }
//     }
// }


// import axios from 'axios';
// axios.get("http://127.0.0.1:5500/content.json").then((res)=>{
//     console.log(res);
// });
// fetch("../content.json").then((res)=>{
//     console.log(res);
// });