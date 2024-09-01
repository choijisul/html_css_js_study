// 노드 추가
// const aEl = document.createElement("a");
// document.body.appendChild(aEl);

// const txtEl = document.createTextNode("길벗");
// document.querySelector("a").appendChild(txtEl);

// const hrefAttr = document.createAttribute("href");
// hrefAttr.value = "https://www.gilbut.co.kr";
// document.querySelector("a").setAttributeNode(hrefAttr);

// 노드 삭제
const pEl = document.querySelector("p");
pEl.parentNode.removeChild(pEl);

const childNodes = document.body.childNodes;
childNodes.forEach((node) => {
    if(node.nodeName === "A") 
        node.parentNode.removeChild(node);
})