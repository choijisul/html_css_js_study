// 인라인 방식
// function clickEvent1(){
//     alert("click1");
// }
// function focusEvent1(){
//     console.log("focus on");
// }
// function blurEvent1(){
//     console.log("focus out");
// }

//프로퍼티 리스너 방식
// const btnEl1 = document.querySelector("button");
// btnEl1.onclick = function(){
//     alert("click2");
// }
// btnEl1.onclick = () => {
//     alert("click3");
// }
// btnEl1.onclick = clickEvent1;
// function clickEvent1(){
//     alert("click4");
// }

// 이벤트 등록 메서드 방식
const btnEl2 = document.querySelector("button");
btnEl2.addEventListener('click', function(){
    alert("button click1");
});
const clickEvent2 = () => {
    alert("button click2");
}
btnEl2.addEventListener("click", clickEvent2);  //다른거는 연속으로 지정해도 마지막꺼 한 번만 나오는데, 이벤트 등록 메서드를 이용하면 두번 연속으로 뜸.
