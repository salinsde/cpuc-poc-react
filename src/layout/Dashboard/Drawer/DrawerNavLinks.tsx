import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { DrawerProps } from '@/layout/types';

const links = [
    { text: 'Home', icon: <HomeOutlinedIcon />, link: '/' },
    { text: 'Reports', icon: <FactCheckOutlinedIcon />, link: '/reports' },
    { text: 'Settings', icon: <SettingsOutlinedIcon />, link: '/settings' },
    { text: 'Help', icon: <HelpOutlineOutlinedIcon />, link: '/help' },
];

const DrawerNavLinks = ({ open }: DrawerProps) => {
    return (
        <List>
            {links.map((link) => (
                <ListItem
                    key={link.text}
                    disablePadding
                    sx={{ display: 'block', my: 2 }}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {link.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={link.text}
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default DrawerNavLinks;
