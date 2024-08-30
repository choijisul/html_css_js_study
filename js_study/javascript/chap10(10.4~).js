let a1 = 10;
function sum(){
    console.log(a1);  //10
}
sum();
console.log(a1);  //10
console.log();

function sum2(){
    let a2 = 10;
    console.log(a2);  //10
}
sum2();
// console.log(a2);  //에러
console.log();

let a3 = 10;
{
    let b3 = 20;
    console.log(a3);  //10
    console.log(b3);  //20
}
console.log(a3);  //10
// console.log(b3);  //에러
console.log();

var a4 = 10;
{
    var b4 = 20;
    console.log(a4);
    console.log(b4);
}
console.log(a4);
console.log(b4);
console.log();

let a5 = 10;
const b5 = 20;
function sum3(){
    let a5 = 50;
    const b5 = 70;
    console.log(a5);
    console.log(b5);
}
sum3();
console.log();


//호이스팅 관련
console.log(num);
var num = 10;

// console.log(num2);  //에러
// let num2 = 10;  

printHello();
function printHello(){
    console.log("hello");
}

// printHello2();  //에러
// var printHello2 = function printHello2(){
//     console.log("hello");
// }

// var printHello3();
// printHello3();  //에러
// printHello3 = function printHello3(){
//     console.log("hello");
// }