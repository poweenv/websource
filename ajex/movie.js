// 오늘 날짜 확인 -1 : 어제날짜를 화면에 보여주기

// 년, 월, 일 요소 찾아오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 박스 오피스 순위 보여줄 영역 가져오기
const msg = document.querySelector("#msg");
// 상세정보
const detail = document.querySelector(".box3");

function init() {
  // 오늘날짜
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate() - 1;

  txtYear.value = year;
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  selMon.value = month;
  selDay.value = day;
}

function show(movieCd) {
  console.log("movidCd", movieCd);

  // 영화상세 정보 요청하기
  let url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";

  url += movieCd;
  console.log("영화상세정보", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터가 없습니다.");
      }
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      const movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo);

      // movieInfo 에서 movieNm,movieNmEn(영어제목), showTm(상영시간), directors(감독)
      // actors(출연배우) 추출 후 box3 안에 보여주기

      let str = "<ul>";

      str += "<li>영화제목 : " + movieInfo.movieNm + "</li>";
      str += "<li>영어제목 : " + movieInfo.movieNmEn + "</li>";
      str += "<li>상영시간 : " + movieInfo.showTm + "분</li>";

      if (movieInfo.directors.length) {
        str += "<li>감독 : " + movieInfo.directors[0].peopleNm + "</li>";
      } else {
        str += "<li>감독 : 없음</li>";
      }

      const length = movieInfo.actors.length;
      let peopleNm = "";
      movieInfo.actors.forEach((actor, idx) => {
        if (idx == length - 1) {
          peopleNm += actor.peopleNm;
        } else {
          peopleNm += actor.peopleNm + ", ";
        }
      });
      str += "<li>출연배우 : " + peopleNm + "</li>";
      str += "</ul>";
      detail.innerHTML = str;
    })
    .catch((err) => {});
}

init();
//확인 버튼 클릭시 전일자 영화 순위 가져오기
document.querySelector("#btn1").addEventListener("click", () => {
  let url =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  // 사용자가 선택한 날짜 가져오기
  let date = txtYear.value + selMon.value + selDay.value;
  // url 과 연결
  url += date;
  // console.log() 확인
  console.log(url);

  // 데이터 요청 == ajax
  // fetch

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("주소를 확인해 주세요");
      }
      // 서버에서 오는 데이터는 json ==> 스트립트 객체 처리
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // dailyBoxOfficeList 가져오기
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList);

      let str = "";

      //data에서 rank(rankInten) : movieNm 추출
      dailyBoxOfficeList.forEach((element) => {
        // 순위
        str += element.rank + "위";
        // 전일자 증감
        const rankInten = parseInt(element.rankInten);
        if (rankInten > 0) str += "(▲";
        else if (rankInten < 0) str += "(▼";
        else str += "(";

        str += rankInten + ") : ";
        // 영화명
        str +=
          "<a href='#' onclick='javascript:show(" +
          element.movieCd +
          ")'>" +
          element.movieNm +
          "</a><br>";
      });
      // 박스 영역 안에 보여주기
      msg.innerHTML = str;
    })
    .catch((err) => {
      msg.innerHTML = err;
    });
});
