import { useRef, useState } from 'react';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';
import './App.scss';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // 등록
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  // 삭제
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditer onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
