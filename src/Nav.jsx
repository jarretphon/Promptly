import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton 
                id="menu-button" 
                aria-label="menu" 
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Prompt Library</MenuItem>
                <MenuItem onClick={handleClose}>Saved Prompts</MenuItem>
                <MenuItem onClick={handleClose}>Prompt Builder</MenuItem>
            </Menu>
        </Box>
    )
}

export default Nav