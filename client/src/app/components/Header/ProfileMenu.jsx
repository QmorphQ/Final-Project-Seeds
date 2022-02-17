
import { useState } from "react";
// import { useSelector } from "react-redux";
import { IconButton, Divider, ListItemIcon, MenuItem, Menu, Avatar, Link, Box } from "@mui/material";
import { AccountCircle, Settings, Logout, Favorite, History } from "@mui/icons-material";

// import { loginStateSelector } from "../../../store/selectors/selectors";


// Styles:
const styles = {
    ProfileMenu: {
        Container: {
            
        },
    },
};


export default function ProfileMenu () {
    const [anchorEl, setAnchorEl] = useState(null);
    const logout = () => {
        localStorage.removeItem('jwt');
        window.location.reload();
    }
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return(
        <Box sx={{border: '1px solid green', width: '80px', display: "flex", justifyContent: 'center'}}>
            <IconButton
                size="large"
                edge={false}
                aria-label="account of current user"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            ><AccountCircle />
            </IconButton>
            <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                },
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
            <Avatar/> Profile
            </MenuItem>
            <Divider />
            <Link underline="none" href="https://trello.com/b/4gqPk1fd/fe28fpt1tea">
                <MenuItem >
                    <ListItemIcon>
                        <Favorite fontSize="small" />                    
                    </ListItemIcon> Favourites
                </MenuItem>
            </Link>    
            <Link  underline="none" href="https://trello.com/b/4gqPk1fd/fe28fpt1tea">
                <MenuItem >
                    <ListItemIcon>
                        <History fontSize="small" />
                    </ListItemIcon> My orders
                </MenuItem>
            </Link> 
            
            <Link  underline="none" href="https://trello.com/b/4gqPk1fd/fe28fpt1tea">
                <MenuItem >
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon> Settings
                </MenuItem>
            </Link> 

            <Link  underline="none" onClick={logout}>            
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon> Logout
                </MenuItem>
            </Link> 

        </Menu>
      </Box>
    )
}