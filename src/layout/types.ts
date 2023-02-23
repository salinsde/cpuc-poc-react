import { AppBarProps as MuiAppBarProps } from '@mui/material';
import { DrawerProps as MuiDrawerProps } from '@mui/material';

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    handleDrawerToggle?: () => void;
}

export interface DrawerProps extends MuiDrawerProps {
    open?: boolean;
}
