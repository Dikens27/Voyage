import { Route, Routes } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import { Suspense } from 'react';
import { lazy } from 'react';
import Loader from '../loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage'));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
