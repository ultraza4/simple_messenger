import { Route, Routes } from 'react-router-dom';
import MessagesPage from './components/MessagesPage/MessagesPage';
import MainPage from './components/MainPage/MainPage';
import style from './App.module.css';
import './index.css';

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/MessagesPage/:chatId' element={<MessagesPage />} />
        </Route>
        {/* <Route path='/simple_messenger/MessagesPage/:chatId' element={<MessagesPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
