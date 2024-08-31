function printInfo(){
    console.log("웹 브라우저의 너비 : " +  window.innerWidth);
    console.log("웹 브라우저의 높이 : " +  window.innerHeight);
    console.log("웹 브라우저의 창의 너비 : " +  window.outerWidth);
    console.log("웹 브라우저의 창의 높이 : " +  window.outerHeight);
    console.log("웹 브라우저의 창 위쪽 면과 모니터 사이의 간격 : " +  window.screenTop + "/" + window.screenY);
    console.log("웹 브라우저의 창 왼쪽 면과 모니터 사이의 간격 : " +  window.screenLeft + "/" + window.screenX);
    console.log("웹 브라우저의 창의 스크롤 가로 위치 : " +  window.scrollX);
    console.log("웹 브라우저의 창의 스크롤 세로 위치 : " +  window.scrollY);
}

function popup(){
    window.open('popup.html','팝업', 'width=200, height=100');
}