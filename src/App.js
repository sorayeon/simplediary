import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';
import './App.scss';

const dummyList = [
  {
    id: 1,
    author: '소라연',
    content: '안녕하세요 ^________^',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '홍길동',
    content: '안녕하세요 ^^',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '김철수',
    content: '안녕하세요 ~~!!',
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditer />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
