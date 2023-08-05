import React,{useState} from 'react';
import {AppBar, Box,Toolbar,Typography,IconButton, Drawer} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link,NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '.././styles/HeaderStyles.css';
import logo from '.././images/logo.jpg';
const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  //handlemenuclick
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography color={'goldenrod'} varient='h6' component='div'sx={{flexGrow:1,my:2}}>
          <FastfoodIcon/>
          My Restaurant </Typography>
          
          <ul className='mobile-navigation'>
            <li>
              <Link to={'/home'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
          </ul>
          </Box>
    
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:'black'}}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer'edge='start'sx={{mr:2,display:{sm:'none'}}}
          onClick={handleDrawerToggle}>
            <MenuIcon/>
          </IconButton>
        <Typography color={'goldenrod'} varient='h6' component='div'sx={{flexGrow:1}}>
          <img src={logo} alt='logo'height={'50px'}width={'250px'}/>
          </Typography>
          <Box sx={{display:{xs:'none',sm:'block'}}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink activeClassName='active' to={'/'}>
                Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>Menu</NavLink>
            </li>
          </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
        sx={{display:{xs:'block',sm:'none'},'& .MuiDrawer-paper':{
          boxSizing:'border-box',width:'240px',
        },
        }}>
          {drawer}
        </Drawer>

      </Box>
    </Box>
    <Box>
    <Toolbar/>
    </Box>
    </>
  );
};

export default Header;