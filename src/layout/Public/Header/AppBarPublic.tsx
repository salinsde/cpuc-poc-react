import { styled } from '@mui/material/styles';
import { Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import HeaderContent from './HeaderContent';
import { Link } from 'react-router-dom';
import { LogoHeader } from '@/components/common/CpucLogo';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    boxShadow: 'none',
    color: theme.palette.common.black,
    zIndex: theme.zIndex.drawer + 1,
}));

const AppBarPublic = () => (
    <AppBar position="fixed">
        <Toolbar>
            <IconButton>
                <LogoHeader />
            </IconButton>
            <HeaderContent />
        </Toolbar>
    </AppBar>
);

export default AppBarPublic;
