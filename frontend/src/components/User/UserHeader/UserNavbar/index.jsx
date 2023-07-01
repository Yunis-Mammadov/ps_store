import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Modal from "../Modal";
import styles from "../UserNavbar/index.module.css";
import { UserContextProvider, useUserContext } from '../../../../context/UserContext';
import { useState } from 'react';
import { getUsers } from '../../../../api/request';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import BasicMenu from '../BasicMenu';
import { LoadingOutlined } from '@ant-design/icons';
import PacmanLoader from "react-spinners/PacmanLoader";


const drawerWidth = 300;
const navItems = [
  { label: "Hardware", path: "hardware" },
  { label: "Accessories", path: "accessories" },
  { label: "Games", path: "games" },
];


function UserNavbar() {
  const [user, setUser, isLoggedIn, setIsLoggedIn] = useUserContext();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [loading, setLoading] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const handleBasketClick = () => {
    window.location.href = "/basket";
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const checkLoginStatus = () => {
    setIsLoggedIn(false);
  };


  const renderUserIcon = () => {
    if (isLoggedIn) {
      return (
        <>
          <BasicMenu />
        </>
      );
    } else {
      return (
        <button
          onClick={() => {
            checkLoginStatus();
            // setLoading(true);
            // setTimeout(() => {
            //   setLoading(false);
            // }, 0);
            window.location.href = "/login";
          }}
          style={{
            width: "80px",
            height: "40px",
            borderRadius: "10px",
            border: "none",
            fontSize: "15px",
            backgroundColor: "rgb(25,118,210)",
            color: "white",
            cursor: "pointer"
          }}
          variant="contained"
          // disabled={loading}
        >
          {/* {loading ? (
            <PacmanLoader color="#36d7b7" />
          ) : (
            )} */}
            Sign In
        </button>

      );
    }
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            component={Link}
            key={item.label}
            to={`/${item.path}`}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center", color: "white" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" position='sticky' sx={{
          paddingRight: "0px !important",
          bgcolor: "rgb(31,31,31)",
          width: "100%"
        }}>
          <Box className={styles.TopNav}>
            <img className={styles.TopNavImg} src="https://media.direct.playstation.com/is/image/sierialto/sony-logo@3x?$Icons$" alt="" />
          </Box>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box className={styles.Navbar}>
              <Box className={styles.LinksAndLogo}>
                <Box>
                  <img
                    className={styles.NavbarImg}
                    onClick={() => {
                      window.location.href = "http://localhost:3000/";
                    }}
                    src="https://media.direct.playstation.com/is/image/sierialto/ps-logo-us?$Icons$"
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  {navItems.map((item) => (
                    <Box
                      key={item.label}
                      component={Link}
                      to={`/${item.path}`}
                      sx={{
                        color: 'white',
                        fontSize: '0.9rem',
                        display: 'inline-block',
                        marginLeft: '1.4rem',
                        marginTop: '0.5rem',
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className={styles.ButtonsAndSearch}>
                <Box className={styles.RegisterBtn}>
                  {renderUserIcon()}
                </Box>
                <Box>
                  <Modal />
                </Box>
                <Box
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                  onClick={handleBasketClick}
                >
                  <FavoriteIcon
                    sx={{
                      marginTop: "7px",
                      fontSize: "27px",
                      color: "rgb(214,61,0)",
                      transition: ".5s",
                      "&:hover": {
                        cursor: "pointer"
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                backgroundColor: "rgb(31,31,31)"
              },
            }}
          >
            {drawer}
            <Box sx={{ marginTop: 'auto' }}>
              <FavoriteIcon
                sx={{
                  position: "relative",
                  bottom: "515px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  fontSize: "27px",
                  color: "rgb(214,61,0)",
                  transition: ".5s",
                  "&:hover": {
                    cursor: "pointer"
                  }
                }}
              />
            </Box>
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

export default UserNavbar;

