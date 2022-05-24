const PopupContent = ({ openPopup }) => {
  return (
    <div className="bg">
      <div className="content">
        <img
          src="//gscdn.hackers.co.kr/champ/img/event/2019/07/2200/pc/type3/v1/curri_pop_500_01.jpg"
          alt=""
        />
        <button className="close_btn" onClick={openPopup}>
          X
        </button>
      </div>
    </div>
  );
};

export default PopupContent;
