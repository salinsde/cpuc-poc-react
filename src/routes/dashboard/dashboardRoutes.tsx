import DashboardLayout from '@/layout/Dashboard';
import DashboardMain from '@/pages/Dashboard';
import { dashboardLoader } from './dashboardLoaders';

const dashboardRoutes = {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
        {
            path: '',
            element: <DashboardMain />,
            children: [],
            loader: dashboardLoader,
        },
    ],
};

export default dashboardRoutes;
