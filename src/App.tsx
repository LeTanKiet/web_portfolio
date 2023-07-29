import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {publicRoutes.map((route) => {
        const Comp = route.element;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <DefaultLayout>
                <Comp />
              </DefaultLayout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
