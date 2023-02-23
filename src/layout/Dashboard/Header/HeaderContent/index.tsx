import { Box } from '@mui/material';
import AccountMenu from './AccountMenu';
import Notifications from './Notifications';

const HeaderContent = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Notifications />
                <AccountMenu />
            </Box>
        </>
    );
};

export default HeaderContent;
