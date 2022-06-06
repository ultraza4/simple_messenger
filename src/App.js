import { Route, Routes } from 'react-router-dom';
import MessagesPageContainer from './components/MessagesPageContainer';
import Chats from './components/Chats';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Chats />}>
          <Route path='MessagesPage/:chatId' element={<MessagesPageContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
