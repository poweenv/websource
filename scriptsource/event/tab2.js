//orange 클래스 부착
// tab-버튼0 누르면
//모든 버튼에 붙은 orange 클래스명 제거
// tab-버튼0 orange 클래스명 부착

//버튼 클릭에 맞춰 tab-content 보여주기
// show 붙였다 뗏다 하기

//tab.js ==>forEach 변경
// const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   //첫번째 요소 가져오기
//   let 가져온요소 = 배열명[0];
//   console.log(가져온요소);
// }
//item: 가져온요소, 임의의 변수명을 지정해서 담아준다
// arr.forEach((item,i) => {
//   console.log(item);
// });

//tab-button
const tabBtns = document.querySelectorAll(".tab-button");

// tab-content 찾기
const tabShows = document.querySelectorAll(".tab-content");

tabBtns.forEach((tabBtn, idx) => {
  tabBtn.addEventListener("click", (e) => {
    // 모든 tab-button 의 orange 제거
    tabBtns.forEach((item) => {
      item.classList.remove("orange");
    });
    // 현재 클릭이 된 tab-button 만 orange 부착
    e.target.classList.add("orange");

    // 모든 tab-content 의 show 를 제거
    tabShows.forEach((tabShow) => {
      tabShow.classList.remove("show");
    });
    //현재 클릭이 된 tab-button 만 show 부착
    tabShows[idx].classList.add("show");
  });
});
