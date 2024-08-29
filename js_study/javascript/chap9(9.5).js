// let num1 = 1;
// while(num1 <= 10){
//     // console.log(num1);
//     num1++;
// }

// let num2 = 1;
// while(num2 <= 10){
//     console.log(num2);  //에러
// }

// do{
//     console.log("무조건 한 번은 실행")
// }while(false);

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// for(let i = 0; i < 2; i++){
//     console.log("i:" + i);
//     for(let k = 0; k < 2; k++){
//         console.log("k:" + k);
//     }
// }

// let arr = ["banana", "apple", "orange"];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let obj = {name:"철수", age:20};
// for(let key in obj){
//     console.log(key + ":" + obj[key]);
// }

// let arr = ["orange", "banana", "apple"];
// for(let index in arr){
//     console.log(index + ";" + arr[index]);
// }

// let obj2 = {name:"철수", age:20};
// for(let key in obj){
//     if(key === "age") break;
//     console.log(obj[key]);
// }

for(let i = 0; i < 10; i++){
    // console.log(i);
    // if(i === 5) break;
    if(i % 2 === 0) continue; 
    console.log(i);
}