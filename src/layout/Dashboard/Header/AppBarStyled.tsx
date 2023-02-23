import { styled } from '@mui/material/styles';
import { Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps } from '@/layout/types';
import { drawerWidth } from '@/layout/Dashboard/Drawer';
import HeaderContent from './HeaderContent';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    background: theme.palette.background.paper,
    boxShadow: 'none',
    color: theme.palette.common.black,
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - calc(${theme.spacing(7)} + 1px))`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const AppBarStyled = ({ open, handleDrawerToggle }: AppBarProps) => {
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                >
                    {open ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
                <HeaderContent />
            </Toolbar>
        </AppBar>
    );
};

export default AppBarStyled;
