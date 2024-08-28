// 문자형
let str1 = "문자1";
let str2 = '문자2';
console.log(str1);
console.log(str2);

// let str3 = "문자3';  //오류

// let str4 = "문자"문자";  //오류
let str5 = "문자'문자" 
let str6 = '문자"문자';
console.log(str5);
console.log(str6);

let str7 = "문자3" + "문자3";
let str8 = '문자"' + "문자'";
console.log(str7);
console.log(str8);

let str9 = "문자\n문자";
let str10 = "문자\t문자";
let str11 = "문자\\문자";
console.log(str9);
console.log(str10);
console.log(str11);

let str12 = `문자
문자    "'`;
let a = 10;
let b = 20;
let str13 = `${a} + ${b} = ${a+b}`;
console.log(str12);
console.log(str13);

// 숫자형
let num1 = 10;
let num2 = 0.1;
let sum1 = 0.1 + 0.2;
console.log(num1);
console.log(num2);
console.log(sum1);

// 논리형
let boolean1 = true;
let boolean2 = false;
console.log(boolean1);
console.log(boolean2);

let boolean3 = 10 < 20;
let boolean4 = 10 > 20;
console.log(boolean3);
console.log(boolean4);

// undefined
let empty1;
console.log(empty1);

//null
let empty2 = null;
console.log(empty2);

//배열
let arr1 = [10,20,30];
let arr2 = ['abc', 10, true, undefined, null, [], {}, function(){}];
let arr3 = [];
console.log(arr1);
console.log(arr1[2]);
console.log(arr2);
console.log(arr3);

//객체 리터럴
let score = {
    koreanScore:80,
    engScore:90,
    mathScore:70
};
console.log(score);
console.log(score.engScore);
console.log(score['mathScore']);


