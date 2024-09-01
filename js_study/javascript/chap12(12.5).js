// 폼 조작하기
// console.log(document.forms);

// console.log(document.frm1);
// console.log(document.frm2);
// console.log(document.frm3);

// 폼 요소 선택하기
// console.log(document.frm4.elements[0]);
// console.log(document.frm4.elements['uname']);
// console.log(document.frm4.uname);
// console.log(document.frm4.age);
// console.log(document.forms[0].gender);

// 폼 입력 요소 다루기
// document.frm5.id.value = 'jscoding';
// document.frm5.pw.value = 'aaaccc';
// console.log(document.frm5.pw.value);
// console.log(document.frm5.id.value);

// document.frm6.desc.value = 'setting!';
// console.log(document.frm6.desc.value);

const checkboxEls = document.querySelectorAll("[type='checkbox']");
for(let i = 0; i < checkboxEls.length; i++){
    checkboxEls[i].checked = true;
    if(checkboxEls[i].checked === true){
        // console.log(checkboxEls[i].value);
    }
}

const radioEls = document.querySelectorAll("[type='radio']");
for(let i = 0; i < radioEls.length; i++){
    if(radioEls[i].value === 'banana'){
        radioEls[i].checked = true;
    }
    if(radioEls[i].checked === true){
        // console.log(radioEls[i].value);
    }
}

const optionEls = document.querySelectorAll("option");
for(let i = 0; i < optionEls.length; i++){
    if(optionEls[i].value === 'banana'){
        optionEls[i].selected = true;
    }
    if(optionEls[i].selected === true){
        console.log(optionEls[i].value);
    }
}

const filesObj = document.frm7.upload.files;
console.log(filesObj);
console.log(filesObj[0].name);
console.log(filesObj[0].size);
console.log(filesObj[0].type);
console.log(filesObj[0].lastModifiedDate);


