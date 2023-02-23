import DashboardLayout from '@/layout/Dashboard';
import PGE from '@/pages/PGE';

const dashboardRoutes = {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
        {
            path: 'pge',
            element: <PGE />,
            children: [],
        },
    ],
};

export default dashboardRoutes;
