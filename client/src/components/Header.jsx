import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Header = ({ user, toggleTheme, theme }) => {
  const logout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AppBar position="static" color="background" sx={{ minWidth: '99vw' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          Code Collab
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {user && (
          <>
            <Avatar src={user.image} alt={user.displayName} style={{ marginRight: '10px' }} />
            <Typography variant="body1" style={{ marginRight: '20px' }}>
              {user.displayName}
            </Typography>
            <Button color="primary" variant="outlined" onClick={logout}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;