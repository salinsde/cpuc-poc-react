import { Box, Typography } from '@mui/material';
import logo from '@/assets/cpuc-logo-md.png';
import { styled } from '@mui/material';

const Img = styled('img')`
    max-width: 60px;
`;

export const Logo = () => <Img src={logo} />;

export const LogoHeader = () => (
    <>
        <Img src={logo} />

        <Typography display="block" variant="h5" px={1}>
            <Typography align="left" variant="overline" display="block" px={1}>
                California
            </Typography>
            Public Utilities Commission
        </Typography>
    </>
);
