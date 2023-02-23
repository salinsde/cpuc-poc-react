import { createBrowserRouter } from 'react-router-dom';
import dashboardRoutes from './dashboardRoutes';
import publicRoutes from './publicRoutes';

const router = createBrowserRouter([publicRoutes, dashboardRoutes]);

export default router;
