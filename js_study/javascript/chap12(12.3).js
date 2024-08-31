// document.getElementById("title1").textContent;
// document.getElementById("title1").innerText;
// // document.getElementById("title1").innerHTML;

// document.querySelector("#textContent").textContent = `<String>textContent</String> 속성`;
// document.querySelector("#innerText").textContent = `<String>innerText</String> 속성`;
// document.querySelector("#innerHTML").textContent = `<String>innerHTML</String> 속성`;

// const pEl1 = document.querySelector("p");
// pEl1.style.color = "#eeeeee";
// pEl1.style.backgroundColor = "#ff0000";
// pEl1.style.fontSize = "20px";

// const pEl2 = document.querySelector("#text3")
// pEl2.classList.add("red-color");
// pEl2.classList.add("fz20", "back");
// pEl2.classList.remove("back");
// setInterval(function(){
//     pEl2.classList.toggle("red-color");
// }, 1000);

// const buttonEls = document.querySelectorAll("button");
// buttonEls.forEach((el) => {
//     console.log(el.dataset);
//     console.log(el.dataset.cnt);
//     el.dataset.cnt = 50;
//     console.log(el.dataset);
// });

const aEl = document.querySelector("a");
const href = aEl.getAttribute("href");
console.log(href);

aEl.setAttribute("href", "https://www.sucoding.kr");
aEl.innerHTML = "수코딩";
console.log(aEl);

aEl.setAttribute("target", "_blank");
aEl.setAttribute("class", "red-color");

aEl.removeAttribute("class");