import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';
import './App.scss';
import { useRef, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

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

  return (
    <div className="App">
      <DiaryEditer onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
