


// if(10>5){
//     // true
//     console.log("hi")
// }else{
//     // false
//     console.log("by")
// }





// var age = 10;
// if(age>20){
//     console.log("age > 20")
// }else if(age<20){
//     console.log("age < 20")
// }
// else if(age>10){
//     console.log("age > 10")
// }












// console.log(10 === 10);


// var oil = prompt("oil type");
// var l = prompt("l");


// if(oil == 80){
//     console.log(l *2);
// }else if (oil == 90){
//     console.log(l * 3)
// }else if (oil == 92){
//     console.log(l * 4)
// }else{
//     console.log("error")
// }


// var oil = 80;
// var l = 20;


// var age = prompt("how old are u");

// console.log(age);


// var oil = 80;
// var l = 10;

// switch(oil){
//     case 80:
//         console.log(2*l);
//     break;  
//     case 90:
//         console.log(3*l);
//     break;  
//     case 92:
//         console.log(4*l);
//     break;
//     default:
//         console.log("error")
// }




// var colors  = ["red","green","blue",20,[1,2]];
// console.log(colors);


// var i = 2;
// while(10>i){
//     i = i +1;
//     console.log(i)
// }



// var items = ["ahmed","mohamed","radwa"];

// var i = 1;
// while(i<=16){
//     if (i%3 == 0 && i%5 == 0){
//         console.log("fizzbuzz")
//     } 
//     else if(i%3 == 0){
//         console.log("fizz")
//     }else if(i%5 == 0){
//         console.log("buzz")
//     }
//     else{
//         console.log(i);
//     }
//     i = i+1;
// }




// max = 2000
// numbers[i] = 600

// var numbers = [10,2000,100,5,600];
// var i =0;
// var max = numbers[0];
// while(i<numbers.length){
//     if(numbers[i] < max){
//         max = numbers[i];
//     }
//     i++;
// }


// console.log(max);



// var numbers = [2,4,3,1,23,1,3];
// console.log(numbers[numbers.length-1])
// var i = 0;
// while(i<numbers.length){
//     // if(numbers[i] + numbers[i+1] == 6){
//         console.log(numbers[i] , numbers[i+1])
//     // }
//     i++;
// }






// var numbers = [2,3,4,1,6];
// var i =0;


// while(i<numbers.length){
//     var x = 0;
//     while(x<numbers.length){
        
//         if(numbers[i] + numbers[x] == 6){
//             console.log(numbers[i] , numbers[x]);
//         }
//         // console.log(x);
//         x++;
//     }

//     i++;
// }




// var i =0;
// while(i<10){

//     i++;
// }


// for(var i =0;i<10;i++){
//     console.log(i);
// }




// var items = ["red","green","blue"];



// var i = 0;
// do{

//     console.log(i);
//     i++;
// }while(i>10);











// while(x = items.pop()){
//     console.log(x);
// }

// for(var x ;x = items.pop();){
//     console.log(x);
// }

// console.log(items.pop());
// console.log(items.pop());

// console.log(items);
// console.log(items.pop());
// console.log(items.pop());
// console.log(items.pop());









// function add(x,y)
// {
//     console.log(x+y)
// }


// add(10,20);





// function number(n){
//     return n;
// }
// number(19);
// console.log(number(20))
// console.log(number(30) + 10);


var pas = document.getElementById("password");
document.getElementById("show").onclick = function(){
    if(pas.type == "password"){
        pas.type = "text";
    }else{
        pas.type = "password";
    }
};



// function hi () {
//     console.log("hi");
// }


// var hi = function(){
//     console.log("hi")
// }

// hi();