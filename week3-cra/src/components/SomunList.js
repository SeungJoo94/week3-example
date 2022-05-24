const SomunList = ({ list }) => {
  return (
    <table>
      <colgroup>
        <col style={{ width: "70%" }} />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <td>URL</td>
          <td>등록일자</td>
        </tr>
        {list.map((list, index) => (
          <tr id={list.id} key={index}>
            <td>{list.url}</td>
            <td>{list.regDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SomunList;
