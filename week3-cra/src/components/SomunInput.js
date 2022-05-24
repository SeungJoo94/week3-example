import React from "react";

const SomunInput = ({ value, setValue, updateList }) => {
  const [noticeMessage, setNoticeMessage] = React.useState("");
  const writeText = (e) => {
    setValue(e.target.value);
  };
  const submitSomunForm = (e) => {
    e.preventDefault();
    if (value === "") {
      setNoticeMessage("url을 입력해주세요");
      return;
    }
    setValue("");
    updateList();
  };
  return (
    <div>
      <form className="somun_form" onSubmit={submitSomunForm}>
        <input
          type="text"
          placeholder="url을 입력하세요"
          onChange={writeText}
          value={value}
        />
        <button>인증하기</button>
      </form>
      <p>{noticeMessage}</p>
    </div>
  );
};

export default SomunInput;
