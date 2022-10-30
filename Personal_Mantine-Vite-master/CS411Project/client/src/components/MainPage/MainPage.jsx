import React from 'react';
import { useState } from 'react';
import { Typography, Box, AppBar, Toolbar, CssBaseline, Drawer, ListItem, List, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';


const drawerWidth = 240;

const MainPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const gridStyle = {backgroundColor: "#002952"}
    const drawerStyle = {backgroundColor: "#121416"}
  return (
    <Box sx={{display:'flex'}} style={gridStyle}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer +1 }} style={gridStyle}>
            <Toolbar>
                <Typography variant="h5" noWrap component="div" >
                    Spotify To Youtube
                </Typography>
                <div>
                    <IconButton
                        sx={{marginLeft: "1350px"}}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            
            }}
            >
            <Toolbar />
            <Box 
                sx={{
                    overflow:"auto", 
                    paddingTop: 1, 
                    height: "100%",
                }} 
                style={drawerStyle}
             >
              {  myList.map((iconInfo) =>(
                        <List >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{color:"white", fontSize:30}}>
                                        {iconInfo.Icon}
                                    </ListItemIcon>
                                    <ListItemText style={{color:"white"}} primary={iconInfo.name} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    ))
                }
                <Divider sx={{ mt:2, bgcolor: "#7f3fde", borderBottomWidth: 2}}/>
            </Box>
            
        </Drawer>
    </Box>
  )
}

export default MainPage

const myList = [
    {
        name        : "Home",
        Icon        :  <HomeIcon/>,
        Index       :  1
    },
    {
        name        : "Search",
        Icon        :  <SearchIcon/>,
        Index       :  2
    },
    {
        name        : "Library",
        Icon        :  <LayersIcon/>,
        Index       :  3
    },
    {
        name: "Create Playlist",
        Icon: <PlaylistAddIcon/>,
        Index       :  4
    },
    {
        name: "Liked Songs",
        Icon: <ThumbUpOffAltIcon/>,
        Index       :  5
    }
]
