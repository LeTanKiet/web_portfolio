import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
