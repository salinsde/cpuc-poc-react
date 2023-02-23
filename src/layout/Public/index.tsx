import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBarPublic from './Header/AppBarPublic';

const Public = () => {
    return (
        <Box>
            <AppBarPublic />
            <Box p={5}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Public;
