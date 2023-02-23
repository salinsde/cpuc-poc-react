import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { DrawerProps } from '@/layout/types';
import cpucLogo from '@/assets/cpuc-logo-md.png';
import DrawerNavLinks from './DrawerNavLinks';

export const drawerWidth = 240;

const sharedMixin = (theme: Theme): CSSObject => ({
    overflowX: 'hidden',
    background: theme.palette.info.light,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    ...sharedMixin(theme),
});

const closedMixin = (theme: Theme): CSSObject => ({
    width: `calc(${theme.spacing(7)} + 1px)`,
    ...sharedMixin(theme),
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    img: {
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    borderTop: 0,
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const DrawerStyled = ({ open }: DrawerProps) => {
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <img src={cpucLogo} />
            </DrawerHeader>
            <DrawerNavLinks open={open} />
        </Drawer>
    );
};

export default DrawerStyled;
