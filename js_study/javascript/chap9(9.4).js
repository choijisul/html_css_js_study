// iif, else, if else
let num1 = 10;
if(num1 % 2 === 0){
    console.log("짝수");
}

let num2 = 7;
if(num2 % 2 === 0){
    console.log("짝수");
}else{
    console.log("홀수");
}

let num3 = 0;
if(num3 > 0){
    console.log("양수");
}else if(num3 < 0){
    console.log("음수");
}else{
    console.log("0");
}

let score = 90;
if(score >= 90 && score <= 100){
    console.log("A++");
}

//switch case
let food1 = "melon";
switch(food1){
    case "melon":
        console.log("fruit");
        break;
    case "apple":
        console.log("fruit");
        break;
    case "banana":
        console.log("fruit");
        break;
    default:
        console.log("not fruit");
        break;
}

let food2 = "carrot";
switch(food2){
    case "melon":
    case "apple":
    case "banana":
        console.log("fruit");
        break;
    case "carrot":
        console.log("vegetable");
        break;
    default:
        console.log("not fruit, not vegetable");
        break;
}