// chap10.1 ~ chap10.2 예제 작성
function gugudan1(){
    for(let i = 1; i <= 9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
// gugudan1();

const gugudan2 = function gugudan2(){
    for(let i = 1; i <= 9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
// gugudan2();

const gugudan3 = function(){
    for(let i = 1; i <= 9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
// gugudan3();

const gugudan4 = () => {
    for(let i = 1; i <= 9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
// gugudan4();


// chap 10.3 예제 작성
function gugudan5(dan){
    for(let i = 0; i <= 9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
    console.log();
}
// gugudan5(3);
// gugudan5(5);

function sum(num1, num2){}
sum(10, 20);
function sum2(num1, num2){}
sum2();  //에러는x, num1,num2의 값은 사용 불가.
// function sum3(){}
// sum3(num1, num2);  //마찬가지, 값 사용 불가. 에러남

function sum4(a = 10, b = 10){
    console.log(a + b);
}
sum4();

function sum5(num1, num2){
    let result = num1 + num2;
    return result;
    // return num1 + num2;  //이것도 가능
}
const result = sum5(10, 20);
console.log("out : " + result);

function sum6(num1, num2){
    if(typeof num1 != "number" || typeof num2 !== "number"){
        return;
    }
    console.log(num1 + num2);
}
let result2 = sum6("a", "b");
console.log("out : " + result2);