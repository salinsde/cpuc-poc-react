import Public from '@/layout/Public';
import Home from '@/pages/Public/Home';
import About from '@/pages/About';

const publicRoutes = {
    path: '/',
    element: <Public />,
    children: [
        {
            path: '',
            element: <Home />,
        },
        {
            path: '/about',
            element: <About />,
        },
    ],
};

export default publicRoutes;
