import { Route, Routes } from 'react-router-dom';
import MessagesPageContainer from './components/MessagesPageContainer';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/simple_messenger' element={<MainPage />}>
          <Route path='/simple_messenger/MessagesPage/:chatId' element={<MessagesPageContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
