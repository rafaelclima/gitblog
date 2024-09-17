import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Blog } from './pages/Blog';
import { ErrorPage } from './pages/ErrorPage';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

export function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="blog"
            element={<Blog />}
          />
          <Route
            path="post"
            element={<Post />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
