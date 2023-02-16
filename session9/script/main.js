

// var ele =  document.getElementsByTagName("div");

// var ele = document.getElementsByClassName("ele");

// var ele = document.querySelectorAll("div");
// console.log(ele);


// document.querySelector("div").innerHTML = "<h1>ohamed</h1>";



// document.querySelector("input").value = "ahmed";



// document.querySelector("#click").onclick = function(){
//     var x = document.querySelector("#x").value;
//     var y = document.querySelector("#y").value;
//     var o = document.querySelector("#o").value;
//     var res = 0;
//     switch(o){
//         case "+":
//              res = parseInt(x) + parseInt(y);
//             console.log(res);
//         break;  
//         case "-":
//              res = x - y;
//             console.log(res);
//         break; 
//         case "*":
//              res = x * y;
//             console.log(res);
//         break; 
//         case "/":
//              res = x / y
//             console.log(res);
//         break;  
//     }
// }



// document.querySelector("#click").onclick = function () { 

//     var username =  document.querySelector("#username");

//     if(username.value.length == 0){
//         username.classList.add("border-red");
//         // username.style.border = "1px solid red";
//     }else{
//         username.classList.remove("border-red");
//         // username.style.border = "1px solid black";
//     }

//  }


// var u = "mohamed";

// console.log(u.length);


// document.querySelector("#text").onkeyup = function(){
//     let text =  document.querySelector("#text").value;
//     if(text.length >= 20){
//         document.querySelector("#text").classList.add("border-red");   
//     }else{
//         document.querySelector("#text").classList.remove("border-red");   

//     }
//     document.querySelector("#res").innerText = "count is :"+text.length;
// }



// for(var i=0;i<10;i++){
//     document.write("<h1>ahmed</h1>")
// }



// document.write("<table >");

// for(var row=1;row<=8;row++){
//     document.write("<tr>")
//         for(var column = 1;column<=8;column++){
//             if((column+row)%2 == 0){
//                 document.write("<td class='black' width='100px' height='100px'><td>");
//             }else{
//                 document.write("<td width='100px' height='100px'><td>");
//             }
//         }
//     document.write("</tr>")
// }

// document.write("</table>");



// var imgs = [
//     "img/g1.webp",
//     "img/g2.webp",
//     "img/g3.webp",
//     "img/g4.webp",
// ]

// var index = 0;
// document.querySelector("#next").onclick = function(){
//         document.getElementById("img").src = imgs[index++ %imgs.length];
// }


// var person = {name:"mohamed",age:20};

// console.log(person);


// var users = [
//     {name:"mohamed",age:10},
//     {name:"ahmed",age:10},
//     {name:"eslam",age:10},
// ];


// console.log(users);


// document.getElementById("click").onclick = function () { 

//     alert("w")
//  }


// function add(){
//     alert("ww")
// }

// var todo = [];

// document.getElementById("add").onclick = function(){
//     var task =  document.getElementById("task").value;
//     todo.push({taskname:task,status:0})
//     console.log(todo);
//     document.getElementById("task").value = "";
//     show();
// }


// function show(){
//     var res = "";
//     for(var i =0; i< todo.length; i++){
//         // res += "<li onclick='done("+i+")'>"+todo[i].taskname+"</li>";
//         var classname = (todo[i].status == 1) ? "throw" : "";
//         res += `<li class='${classname}'>  <span  onclick='done(${i})'>${todo[i].taskname}</span>  <button onclick='destroy(${i})'>delete</button>  <button onclick='edit(${i})'>edit</button></li>`;
//     }

//     document.getElementById("res").innerHTML = res;
// }



// function done(index){
//     if(todo[index].status == 0){
//         todo[index].status = 1;
//     }else{
//         todo[index].status = 0;
//     }
//     console.log(todo);
//     show();
// }


// function destroy(index){
//     todo.splice(index,1);
//     show();
// }

// var indexupdate;

// function edit(index){
//     indexupdate = index;
//     console.log(index);
//     document.getElementById("task").value = todo[index].taskname;
//     document.getElementById("update").style.display = "block";
//     document.getElementById("add").style.display = "none";
// }


// document.getElementById("update").onclick = function(){
//     var textvalue =  document.getElementById("task").value;
//     todo[indexupdate].taskname = textvalue;
//     // console.log(indexupdate);
//     show();
// }







// colors 


// document.getElementById("colors").onclick = function(e)
// {
//     console.log(e)
//     document.body.style.background = e.target.id;
// }


// document.getElementById("red").onclick = function(){
//     document.body.style.background = "red";
// }

// document.getElementById("blue").onclick = function(){
//     document.body.style.background = "blue";
// }


// document.getElementById("green").onclick = function(){
//     document.body.style.background = "green";
// }




// bom


// window.onscroll = function(){
//     console.log(document.body.scrollTop);
//     if(document.body.scrollTop >= 100){
//         document.getElementById("pointer").classList.add("pointershow");
//         document.getElementById("pointer").classList.remove("pointer");
//     }
//     else{
//         document.getElementById("pointer").classList.remove("pointershow");
//         document.getElementById("pointer").classList.add("pointer");
//     }
// }

// console.log("1")
// console.log("2")

// window.setTimeout(function(){
//     console.log("mohamed")
// },1000);


// window.setInterval(function(){
//         console.log("mohamed")
// },1000);
// console.log("3")



// var imgs = [
//     "img/g1.webp",
//     "img/g2.webp",
//     "img/g3.webp",
//     "img/g4.webp"
// ];
// var i = 0;
// window.setInterval(function(){
//     document.getElementById("img").src  = imgs[i++%imgs.length]
// },1000);

