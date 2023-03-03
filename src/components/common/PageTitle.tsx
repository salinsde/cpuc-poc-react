import Typography from '@mui/material/Typography';
import { SmallLogo } from '@/components/styled/Logos';
import { PageTitleProps } from '../types';

export const PageTitle = ({ title, logoSrc }: PageTitleProps) => (
    <Typography variant="h6">
        {logoSrc && <SmallLogo src={logoSrc} />}
        {title}
    </Typography>
);
