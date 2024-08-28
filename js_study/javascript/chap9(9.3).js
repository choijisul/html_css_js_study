let sum1 = 10 + 20;
let sub1 = 20 - 10;
let multi1 = 10 * 20;
let div1 = 10 / 2;
let remain1 = 10 % 3;
let expon1 = 2 ** 3;
// console.log(sum1);
// console.log(sub1);
// console.log(multi1);
// console.log(div1);
// console.log(remain1);
// console.log(expon1);

let increment1 = 10;
increment1 ++;
let decrement1 = 10;
decrement1 --;
// console.log(increment1);
// console.log(decrement1);

// let increment2 = 10++;  //에러
let num1 = 10;
let subNum1 = num1++;
let subNum2 = num1--;
// console.log(subNum1);  //10
// console.log(subNum2);  //11

let num2 = -10;
num2 = -num2;
// console.log(num2);

let num3 = 10;
num3 += 5;
// console.log(num3);
num3 -= 5;
// console.log(num3);
num3 *= 3; 
// console.log(num3);
num3 /= 2;
// console.log(num3);
num3 %= 6;
// console.log(num3);
num3 **= 2;
// console.log(num3);

// console.log(10 == '10');
// console.log(10 === '10');
// console.log(10 != '10');
// console.log(10 !== '10');
// console.log(10 < 10);
// console.log(10 <= 10);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(true && false);
// console.log(true && false && true);
// console.log("" && "chat");
// console.log(undefined && "cat");
// console.log(0 && "cat");
// console.log("cat" && null);
// console.log("cat" && "dog");
// console.log("cat" && "dog" && "bird");

// console.log(false || true || false);
// console.log(false || false);
// console.log(false || "cat");
// console.log("" || "cat");
// console.log("dog" || "cat");  //문자열은 true

// console.log(!false);
// console.log(!(10 < 20));
// console.log(!(10 < 20 && 20 < 10));

let score = 90;
let grade = score >= 90 ? 'A+' : 'B';
// console.log(grade);

let sum2 = 10 + 20 * 3;
let sum3 = (10 + 20) * 3;
let num8 = 10;
let result1 = num8 *= 3;
// console.log(sum2);
// console.log(sum3);
// console.log(result1);

const result2 = 10 + "10";
console.log(result2);

let num9 = 10;
let strNum1 = "10";
if(num9 == strNum1){
    console.log(`equalse`);
}

let num10 = 10;
let strNum2 = "10";
if(String(num10) == strNum2){
    console.log(`equalse`);
}
