import { PropsWithChildren } from 'react';

export interface TopBarProps extends PropsWithChildren {
    open: boolean;
    anchorEl: null | HTMLElement;
    handleClose: () => void;
}
