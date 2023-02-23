import { MouseEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TopBarPopMenu from '@/components/common/TopBarPopMenu';

const Notifications = () => {
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
                <NotificationsNoneOutlinedIcon sx={{ mx: 1 }} />
            </IconButton>
            <TopBarPopMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> Contacts
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <MailOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    Messages
                </MenuItem>
            </TopBarPopMenu>
        </>
    );
};

export default Notifications;
