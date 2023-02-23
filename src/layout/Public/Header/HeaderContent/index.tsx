import { Box } from '@mui/material';
import AccountMenu from './AccountMenu';
import SearchBar from './SearchBar';

const HeaderContent = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ flexGrow: 2 }}>
                <SearchBar />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <AccountMenu />
            </Box>
        </>
    );
};

export default HeaderContent;
