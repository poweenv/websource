//orange 클래스 부착
// tab-버튼0 누르면
//모든 버튼에 붙은 orange 클래스명 제거
// tab-버튼0 orange 클래스명 부착

//버튼 클릭에 맞춰 tab-content 보여주기
// show 붙였다 뗏다 하기

//tab-button

const tabBtn0 = document.querySelector(".list > li:first-child");
const tabBtn1 = document.querySelector(".list > li:nth-child(2)");
const tabBtn2 = document.querySelector(".list > li:last-child");

// tab-content 찾기
const tabShow0 = document.querySelector(".container > div:nth-child(2)");
const tabShow1 = document.querySelector(".container > div:nth-child(3)");
const tabShow2 = document.querySelector(".container > div:nth-child(4)");

tabBtn0.addEventListener("click", () => {
  tabBtn0.classList.add("orange");
  tabBtn1.classList.remove("orange");
  tabBtn2.classList.remove("orange");

  tabShow0.classList.add("show");
  tabShow1.classList.remove("show");
  tabShow2.classList.remove("show");
});
tabBtn1.addEventListener("click", () => {
  tabBtn0.classList.remove("orange");
  tabBtn1.classList.add("orange");
  tabBtn2.classList.remove("orange");
  tabShow0.classList.remove("show");
  tabShow1.classList.add("show");
  tabShow2.classList.remove("show");
});
tabBtn2.addEventListener("click", () => {
  tabBtn0.classList.remove("orange");
  tabBtn1.classList.remove("orange");
  tabBtn2.classList.add("orange");
  tabShow0.classList.remove("show");
  tabShow1.classList.remove("show");
  tabShow2.classList.add("show");
});
