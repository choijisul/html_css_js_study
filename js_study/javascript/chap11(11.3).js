//String 객체
const pw = "124";
if(pw.length < 4){
    console.log("4자리 이상 입력");
}

const email = "gmail.com";
if(email.includes("@") === false){
    console.log("@를 포함하세요")
}
if(email.indexOf("@") === -1){
    console.log("@를 포함하세요")
}
console.log();

// Array 객체
const arr1= [10,20,30];
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

const arr2 = [10,20,30,40];
arr2.push(50);
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.unshift(0);
console.log(arr2);
arr2.shift();
console.log(arr2);

const arr3 = [10,20,30,40];
arr3.forEach(function(a){
    console.log(a);
});
console.log();

//Date 객체
const date1 = new Date();
console.log(date1);

const date2 = new Date(2022, 11, 25);
const date3 = new Date(2022, 11, 25, 18, 30, 50);
console.log(date2);
console.log(date3);

const date4 = new Date(2022, 11, 25, 18, 30, 50);
const dateFormat = `${date4.getFullYear()}-${date4.getMonth() + 1}-${date4.getDate()} ${date4.getHours()}:${date4.getMinutes()}:${date4.getSeconds()}`;
console.log(dateFormat);

const date5 = new Date().getTime();
console.log(date5);

const date6 = new Date('2022-12-23');
const date7 = new Date('2022-12-25');
const dateDiff = date7.getTime() - date6.getTime();
const interval = dateDiff / (24*60*60*1000);
console.log(interval);
console.log();

//Math 객체
const floatNum = 10.52;
console.log(Math.floor(floatNum));
console.log(Math.ceil(floatNum));
console.log(Math.round(floatNum));

const random1 = Math.random();
console.log(random1);

function getMaxRadom(max){
    return Math.floor(Math.random() * max) + 1;
}
const maxRandom = getMaxRadom(20);
console.log(maxRandom);

function getMinMaxRandom(min, max){
    return Math.floor(Math.random() * (max-min)) + 1 + min;
}
const maxRandom2 = getMinMaxRandom(10, 20);
console.log(maxRandom2);