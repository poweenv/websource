//tab.js ==> 이벤트 버블링 변경
// 이벤트 버블링: 자식에서 발생한 이벤트가 부모로 전달
// e.target : 이벤트가 일어난 대상
// e.currentTarget : 이벤트가 일어난 대상 + 버블링 된 대상

//이벤트 대상(tab-button) => 부모(ul)에게 이벤트가 전달
const tabParent = document.querySelector(".list");
const tabBtns = document.querySelectorAll(".tab-button");
const tabShows = document.querySelectorAll(".tab-content");
// tabBtns.forEach((tabBtn) => {
//   tabBtn.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
//   });
// });

function tapOpen(idx) {
  // 모든 tab-button 의 orange 제거
  tabBtns.forEach((item) => {
    item.classList.remove("orange");
  });

  // 모든 tab-content 의 show 를 제거
  tabShows.forEach((tabShow) => {
    tabShow.classList.remove("show");
  });
  // 현재 클릭이 된 tab-button 만 orange 부착
  tabBtns[idx].classList.add("orange");

  //현재 클릭이 된 tab-button 만 show 부착
  tabShows[idx].classList.add("show");
}

tabParent.addEventListener("click", (e) => {
  // console.log(e.currentTarget.className);
  // console.log(e.target);

  if (e.target == tabBtns[0]) {
    tabOpen(0);
  } else if (e.target == tabBtns[1]) {
    tabOpen(1);
  } else {
    tapOpen(2);
  }
});

// data-이용 : 조건문 안쓸려고
// data- : 전역속성
//      - 다음에는 이름은 자유롭게

// <h1 data-index-number="1234">헤드</h1>
//data-index-number(지정) : dataset.indexNumber(접근)
//스크립트에서 접근
//const h1 = document.querySelector("h1")
//h1.dataset.indexNumber

tabParent.addEventListener("click", (e) => {
  // 이벤트가 일어난 대상의 data- 값 가져오기
  tapOpen(e.target.dataset.id);
});
