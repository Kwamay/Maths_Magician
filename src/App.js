import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
