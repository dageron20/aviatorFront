import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import { Landing } from './pages/Landing';
import { Admin } from './pages/Admin';

function App() {
  return (
    <ConfigProvider locale={ruRu}>
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
