import React from "react";

const BookList = (props) => {
  const [isChecked, setIsChecked] = React.useState(false); //checkbox 상태 변화 관리

  //가격에 컴마찍기
  const bookPrice = props.bookItem.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  //radio, checkbox 상태 관리하는 함수 따로
  function radiotest(e) {
    console.log(props);
    props.setPrice2(props.bookItem.price);
    props.setNoticeMessage("");
  }
  function checktest(e) {
    if (!isChecked) {
      setIsChecked(true);
      props.setPrice(props.price + props.bookItem.price);
      if (props.price2 === 0) {
        props.setNoticeMessage(
          "토익교재 포함 선택 시 그래머 게이트웨이 교재를 선택할 수 있습니다."
        );
      }
    } else {
      setIsChecked(false);
      props.setPrice(props.price - props.bookItem.price);
      props.setNoticeMessage("");
    }
  }
  function onChangeInput(e) {
    e.target.type === "radio" ? radiotest(e) : checktest(e);
  }
  return (
    <li>
      <input
        type={props.bookItem.inputType}
        name="book"
        id={props.bookItem.id}
        onChange={onChangeInput}
        value={props.bookItem.price}
      />
      <label htmlFor={props.bookItem.id}>
        {props.bookItem.title}: {bookPrice}원
      </label>
    </li>
  );
};

export default BookList;
