import { Route, Routes } from 'react-router-dom';

import Feed from '@/pages/Feed';
import Home from '@/pages/Home';
import NotFoundPage from '@/pages/NotFound';

const MainRoutes: React.FC = () => {
  return (
    <main className="h-full">
      <Routes>
        <Route index element={<Feed />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default MainRoutes;
