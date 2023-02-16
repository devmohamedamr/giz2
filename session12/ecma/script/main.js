// // var i = 20;



// // for(var i = 0;i<10;i++){
// //     console.log(i);
// // }


// // console.log(i);
// // console.log(i);


// // let y = 10;

// // console.log(y);





// let i = 20;

// for(let i = 0;i<10;i++){
//     console.log(i)
// }

// console.log(i);


// const PI = 22/7;



// const pi = 30;
// console.log(pi);






// let user = {name:"ahmed",age:22};
// console.log(user);

// class
// function user(n,a){
//     this.name = n;
//     this.age = a;
//     this.number = function(){
//         console.log(this.age)
//     }
// }



// let u1  = new user("mohamed",22);
// u1.number();
// let u2  = new user("ahmed",2);
// u2.number();


// user();

// function user(a){
//     this.age = a;

//     this.increment = ()=>{
//         setInterval(()=>{
//             console.log(this.age++)
//         },1000);
//     }
// }


// let u = new user(20);
// u.increment();




// let x = (age,name) => console.log(age,name);


// x(30,"ahmed");







// class user{
//     constructor(n,a){
//         this.name =n;
//         this.age = a;
//     }

//     increment = ()=>{
//         console.log(this.age)
//     }
// }


// let u = new user("mohamed",22);
// u.increment();
// console.log(u);



function first(){
    console.log("first");
    setTimeout(()=>{
        console.log([1,2,3]);
    },1000);
}
function second(){
    console.log("second");
    setTimeout(()=>{
        console.log([4,5,6]);
    },2000);
}

function third(){
    console.log("third");
    setTimeout(()=>{
        console.log([7,8,9]);
    },3000);
}

function forth(){
    console.log("forth");
    setTimeout(()=>{
        console.log([11,12,14]);
    },4000);
}

// first(function(r){
//     console.log(r)
//     second(function(r){
//         console.log(r);
//         third(function(r){
//             console.log(r);
//             forth(function(r){
//                 console.log(r);
//             });
//         });
//     });
// });




// let promise = new Promise((res,rej)=>{});

// promise.then(first()).then(second()).then(third()).then(forth());


// let user = {name:"ww",age:23};

// let numbers = [1,23,234,2343];



// for(let num of numbers ){
//     console.log(num);
// }
// for(let i =0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }


// let user = {name:"wdawd",age:22};

// for(u in user){
//     console.log(user[u])
// }


// var name = "mohamed";
// console.log("welcome "+name+" awdawd")
// console.log(`welcome ${name} awdawdawd`)

// let numbers = [23,1,556,8];

// let n = [66,...numbers];
// console.log(n);


// let user = {name:"mohamed",age:56,"address":"giza"};


// let {name,age} = user;

// console.log(age);




// function add(x,y = 1){
//     console.log(x+y);
// }

// add(10)

export let username = "ahmed";

export function add(x,y){
    console.log(x,y);
}