import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import AddValue from './components/pages/AddValue';
import ReduceValue from './components/pages/ReduceValue';
import Wellcome from './components/pages/Wellcome';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/add-value" element={<AddValue />} />
          <Route path="/reduce-value" element={<ReduceValue />} />
          <Route path="/wellcome" element={<Wellcome />} /> 
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;