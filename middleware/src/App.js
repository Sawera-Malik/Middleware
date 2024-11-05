
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
