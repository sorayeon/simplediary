import { useRef, useState } from 'react';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';
import './App.scss';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getDate = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1/comments',
    ).then((res) => res.json());
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getDate();
  }, []);

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
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  // 수정
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it,
      ),
    );
  };

  return (
    <div className="App">
      <DiaryEditer onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
