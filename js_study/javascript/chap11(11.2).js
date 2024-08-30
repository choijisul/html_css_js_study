const person = {
    name:"Hong",
    age:20
};
console.log(person["name"]);
console.log(person["age"]);
console.log();

const person2 = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    likes:["apples", "samsung"],
    printHello:function(){
        return "hello";
    }
};
console.log(person2["name"]);
console.log(person2["name"]["firstName"]);
console.log(person2["likes"]);
console.log(person2["likes"][0]);
console.log(person2["printHello"]);
console.log(person2["printHello"]());
console.log();

console.log(person2.name.lastName);
console.log(person2.age);
console.log(person2.likes[0]);
console.log(person2.printHello());
console.log();

const person3 = {
    name:"Hong Gildong"
};
person3.name = "Kin";
console.log(person3.name);

const person4 = {};
console.log(person4);
person4.name = "Hong";
console.log(person4);

const person5 = {};
person5.name = {
    firstName:"Gildong",
    lastName:"Hong"
};
person5.likes = ["apple", "samsung"];
person5.printHello = function(){
    return "hello";
};
console.log(person5);
console.log();

let num = 10;
let copyNum = num;
num = 20;
console.log(num);
console.log(copyNum);

const person6 = {
    name: "Hong Gildong"
};
person6.name = "Hong";
console.log(person6);

const person7 = {
    name:"Hong"
};
const copyPerson = person7;
person7.name = "Hong";
console.log(person7);
console.log(copyPerson);
