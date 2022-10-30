import React from 'react';
import { Typography, Box, AppBar, Toolbar, CssBaseline, Drawer, ListItem, List, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const drawerWidth = 240;

const MainPage = () => {
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
