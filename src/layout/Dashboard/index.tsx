import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBarStyled from './Header/AppBarStyled';
import DrawerStyled from './Drawer';

const Main = styled('main')`
    align-self: flex-start;
    left: 57px;
    top: 64px;
    position: absolute;
    padding: 20px;
    width: calc(100% - 57px);
`;

const Dashboard = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <AppBarStyled
                open={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <DrawerStyled open={drawerOpen} />
            <Main>
                <Outlet />
            </Main>
        </Box>
    );
};

export default Dashboard;
