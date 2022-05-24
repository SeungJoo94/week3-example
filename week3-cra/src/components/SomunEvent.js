import Title from "./Title";
import SomunInput from "./SomunInput";
import SomunList from "./SomunList";
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from "axios";







const SomunEvent = () => {
 
  const fetchData = async () => {
    const { data } = await axios('/event-list.json',{pardsams:{}});
    return data;
  };
 
  async function setInitialData() {
    const data = await fetchData();
    setList(data);
  }
 
 
  useEffect(() => {
    setInitialData()
  }, []);

  const submitDate =
    new Date().getMonth() < 9
      ? new Date().getFullYear().toString() +
        "-0" +
        (new Date().getMonth() + 1).toString() +
        "-" +
        new Date().getDate().toString()
      : new Date().getFullYear().toString() +
        "-" +
        (new Date().getMonth() + 1).toString() +
        "-" +
        new Date().getDate().toString();

  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState("");

  function updateList() {
    setList([...list, { url: value, regDate: submitDate }]);
  }
  return (
    <div>
      <Title>소문내기 이벤트</Title>
      <SomunInput value={value} setValue={setValue} updateList={updateList} />
      {console.log(list)}
      <SomunList list={list} />
    </div>
  );
};

export default SomunEvent;