import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'  // Import BrowserRouter
import PageLayout from './layouts/PageLayout';
import Home from './routes/home';
import Archivement from './routes/archivements';
import Blog from './routes/blog';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievement" element={<Archivement />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>

  );
}

export default App;
