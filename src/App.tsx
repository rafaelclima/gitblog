import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Blog } from './pages/Blog';
import { Post } from './pages/Post';

export function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
