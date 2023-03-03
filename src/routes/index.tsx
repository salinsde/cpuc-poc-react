import { createBrowserRouter } from 'react-router-dom';
import dashboardRoutes from './dashboard/dashboardRoutes';
import publicRoutes from './public/publicRoutes';

const router = createBrowserRouter([publicRoutes, dashboardRoutes]);

export default router;
