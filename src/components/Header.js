import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MediaBluetoothOnIcon from "@mui/icons-material/MediaBluetoothOn";
import AppsIcon from "@mui/icons-material/Apps";
import MapIcon from "@mui/icons-material/Map";

export default function HeaderBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const drawerConfig = [
    {
      label: "Media Center",
      icon: <MediaBluetoothOnIcon />,
    },
    {
      label: "Gallery",
      icon: <PermMediaIcon />,
    },
    {
      label: "Map",
      icon: <MapIcon />,
    },
  ];

  const drawerConfigSubMenu = [
    {
      label: "Option 1",
      icon: <AppsIcon />,
    },

    {
      label: "Option 2",
      icon: <AppsIcon />,
    },
    {
      label: "Option 3",
      icon: <AppsIcon />,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup></FormGroup>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 1.5,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              //   sx={{ mr: 1 }}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <img src="/ssim-white-logo.png" alt="logo" height={72} />
            </Box>
          </Box>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle sx={{ fontSize: "48px" }} />
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        className="test"
        open={state}
        onClose={() => setState(false)}
        sx={{
          //   width: 400,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            paddingLeft: 1,
            paddingRight: 4,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          marginBottom={3}
          marginTop={2}
        >
          <img src="/savlon.jpg" alt="logo" width="94px" />
        </Box>
        <Divider />
        <List>
          {drawerConfig.map((e) => (
            <ListItem key={e} disablePadding>
              <ListItemButton>
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText primary={e.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {drawerConfigSubMenu.map((e) => (
            <ListItem key={e} disablePadding>
              <ListItemButton>
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText primary={e.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
