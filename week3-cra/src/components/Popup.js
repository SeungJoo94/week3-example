import React from "react";
import Title from "./Title";
import PopupContent from "./PopupContent";

const Popup = () => {
  const [popupOn, setPopupOn] = React.useState(false);
  const openPopup = () => {
    setPopupOn(!popupOn);
  };
  return (
    <div>
      <Title>팝업</Title>
      <button onClick={openPopup}>강의 커리큘럼 보기</button>
      {popupOn ? <PopupContent openPopup={openPopup} /> : ""}
    </div>
  );
};

export default Popup;
