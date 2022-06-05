import { Route, Routes } from 'react-router-dom';
import MessegesPage from './components/MessegesPage';
import Chats from './components/Chats';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Chats />}>
          <Route path='MessegesPage/:chatId' element={<MessegesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
