import config from '../configs';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

export const publicRoutes = [
  { path: config.routes.home, element: Home },
  { path: config.routes.about_us, element: AboutUs },
  { path: config.routes.portfolio, element: Portfolio },
];

export const privateRoutes = [];
