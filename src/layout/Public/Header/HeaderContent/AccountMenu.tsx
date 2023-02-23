import { MouseEvent, useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import MenuItem from '@mui/material/MenuItem';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAdd from '@mui/icons-material/PersonAdd';
import TopBarPopMenu from '@/components/common/TopBarPopMenu';

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <AccountCircleOutlinedIcon sx={{ mx: 1 }} />
            </IconButton>
            <TopBarPopMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    Login
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Request Access
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <ForwardToInboxIcon fontSize="small" />
                    </ListItemIcon>
                    Invite someone
                </MenuItem>
            </TopBarPopMenu>
        </>
    );
};

export default AccountMenu;
