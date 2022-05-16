import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { IRoute, routes } from './routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {routes.map(({ element: Component, ...params }: IRoute) => (
            <Route
              key={params.key}
              path={params.path}
              element={<Component />}
            />
          ))}
          <Route path="*" element={<div>Página não encontrada...</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
