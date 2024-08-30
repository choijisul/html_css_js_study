const person = {};
console.log(person);

const person2 = {
    name: "Choi jisul"
};
console.log(person2);

const person3 = {
    name:["Hong", "Gildong"],
    age:20,
    isAdult:true
}
console.log(person3);

const person4 = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    age:20,
    isAdult:true,
    printIfo:function(){
        console.log('printInfo');
    }
};
console.log(person4)