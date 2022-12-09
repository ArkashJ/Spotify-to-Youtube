import React from "react";
import MainPage from "./components/MainPage/MainPage";
import DisplaySongs from "./components/MainPage/DisplaySongs";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
  Drawer,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LayersIcon from "@mui/icons-material/Layers";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
// const useStyles = makeStyles(theme => ({
//   appBar: {
//     textAlign:"center"
//   }
// }));

function App() {
  // const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <body style={{padding: 0, margin: 0, backgroundColor: "#191414"}}>
      <div
        className="App"
        id="mainBody"
        style={{ backgroundColor: "#191414", margin: 0, padding: 0 }}
      >
        <AppBar
          style={{
            position: "static",
            textAlign: "center",
            color: "#1DB954",
          }}
        >
          <Toolbar
            style={{
              display: "flex",
              // justifyContent: "center",
              color: "1DB954",
              backgroundColor: "#191414",
            }}
          >
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              Spotify to Youtube Playlist Converter
            </Typography>
            <div style={{float:"right"}}>
              <IconButton
                sx={{ marginLeft: 100 }}
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
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div class="parent">
        <div class="child">
          {/* <Drawer
            variant="permanent"
            sx={{
              width: 240,

              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
            }}
          >
            <Box
              sx={{
                overflow: "auto",
                paddingTop: 0,
                height: "100%",
              }}
              style={{ backgroundColor: "#191414" }}
            >
              {myList.map((iconInfo) => (
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ color: "white", fontSize: 30 }}>
                        {iconInfo.Icon}
                      </ListItemIcon>
                      <ListItemText
                        style={{ color: "white" }}
                        primary={iconInfo.name}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              ))}
            </Box>
          </Drawer> */}
        </div>
        <div class="child">
          <DisplaySongs />
        </div>
      </div>
    </body>
  );
}

const myList = [
  {
    name: "Home",
    Icon: <HomeIcon />,
    Index: 1,
  },
  {
    name: "Search",
    Icon: <SearchIcon />,
    Index: 2,
  },
  {
    name: "Library",
    Icon: <LayersIcon />,
    Index: 3,
  },
  {
    name: "Create Playlist",
    Icon: <PlaylistAddIcon />,
    Index: 4,
  },
  {
    name: "Liked Songs",
    Icon: <ThumbUpOffAltIcon />,
    Index: 5,
  },
];

export default App;
