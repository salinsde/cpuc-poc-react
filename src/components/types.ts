import { PropsWithChildren } from 'react';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@mui/material/styles/createTypography';

export interface PageTitleProps {
    title: string;
    logoSrc?: string;
}
export interface TopBarProps extends PropsWithChildren {
    open: boolean;
    anchorEl: null | HTMLElement;
    handleClose: () => void;
}

export interface TypographyCardProps {
    header: string;
    body: string | number;
    bodyColor?: string;
    bodyVariant?: OverridableStringUnion<Variant | 'inherit', {}>;
}
