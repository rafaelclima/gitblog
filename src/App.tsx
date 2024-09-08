import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Blog } from './pages/Blog';
import { ErrorPage } from './pages/ErrorPage';
import { Header } from './components/Header';
import { Post } from './pages/Post';

export function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Blog />}
          />
          <Route
            path="/post"
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
