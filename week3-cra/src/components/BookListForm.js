import React from "react";
import BookList from "./BookList";

const BookListForm = () => {
  const bookItems = [
    {
      title: "해커스 왕기초",
      inputType: "radio",
      price: 20000,
      id: "book1",
    },
    {
      title: "해커스 첫토익",
      inputType: "radio",
      price: 20000,
      id: "book2",
    },
    {
      title: "그래머게이트웨이",
      inputType: "checkbox",
      price: 20000,
      id: "book3",
    },
  ];
  const [price, setPrice] = React.useState(120000);
  const [price2, setPrice2] = React.useState(0); //radio 버튼 선택지의 가격
  const [noticeMessage, setNoticeMessage] = React.useState("");
  function onSubmitForm(e) {
    if (price2 === 0) {
      //radio 버튼이 하나도 클릭되지 않아 price2 값이 0이면 함수실행x
      e.preventDefault();
      return;
    }
    alert("수강신청이 완료되었습니다!");
  }

  //천자리에 콤마찍기
  const TotalPrice = price + price2;

  const TotalPrice2 = TotalPrice.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return (
    <form onSubmit={onSubmitForm}>
      <ul>
        <BookList
          bookItem={bookItems[0]}
          price={price}
          setPrice={setPrice}
          price2={price2}
          setPrice2={setPrice2}
          noticeMessage={noticeMessage}
          setNoticeMessage={setNoticeMessage}
        />
        <BookList
          bookItem={bookItems[1]}
          price={price}
          setPrice={setPrice}
          price2={price2}
          setPrice2={setPrice2}
          noticeMessage={noticeMessage}
          setNoticeMessage={setNoticeMessage}
        />
        <BookList
          bookItem={bookItems[2]}
          price={price}
          setPrice={setPrice}
          price2={price2}
          setPrice2={setPrice2}
          noticeMessage={noticeMessage}
          setNoticeMessage={setNoticeMessage}
        />
      </ul>
      <p>{noticeMessage}</p>
      <p>총 강의 금액: {TotalPrice2}원</p>
      <button>수강신청</button>
    </form>
  );
};

export default BookListForm;
