import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
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
import styles from "../UserNavbar/index.module.css";

const drawerWidth = 300;
const navItems = [
  { label: "Hardware", path: "hardware" },
  { label: "Accessories", path: "accessories" },
  { label: "Games", path: "games" },
  { label: "Contact", path: "contact" }
];

function UserNavbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
            <ListItemButton sx={{ textAlign: "center" }}>
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
          bgcolor: "rgb(31,31,31)"
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
              <Box>
                <img className={styles.NavbarImg} src="https://media.direct.playstation.com/is/image/sierialto/ps-logo-us?$Icons$" alt="" />
              </Box>
              <Box sx={{ width: "100%", display: { xs: 'none', sm: 'block' } }}>
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
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
              <Box className={styles.RegisterBtn}>
                <Button variant="contained">Sign In</Button>
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

export default UserNavbar;

