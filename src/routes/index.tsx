import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import NotFoundPage from '@/pages/NotFound';

const MainRoutes: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default MainRoutes;
