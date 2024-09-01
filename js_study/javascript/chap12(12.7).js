const btnEl = document.querySelector("button");
btnEl.addEventListener("click", function(event){
    console.log(`clientX : ${event.clientX}`);
    console.log(`clientY : ${event.clientY}`);
    console.log(`pageX : ${event.pageX}`);
    console.log(`pageY : ${event.pageY}`);
    console.log(`screenX : ${event.screenX}`);
    console.log(`screenY : ${event.screenY}`);
})

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", function(event){
    console.log(`keyCode : ${event.keyCode}`);
    console.log(`ctrlKey : ${event.ctrlKey}`);
    console.log(`altKey : ${event.altKey}`);
    console.log(`shiftKey : ${event.shifKey}`);
});

const aEls = document.querySelectorAll("a");
for(let i = 0; i < aEls.length; i++){
    aEls[i].addEventListener("click", function(e){
        e.preventDefault();
    });
}

const pEls = document.querySelectorAll("p");
pEls.forEach((el) => {
    el.addEventListener("click", function(){
        console.log(this);
        if(this.style.color === "red") this.style.color = "black";
        else this.style.color = "red";
    })
})

pEls.forEach((el) => {
    el.addEventListener("click", (e) => {
        console.log(e.target);
    })
})