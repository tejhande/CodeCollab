import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  const logout = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/logout`;
  };

  return (
    <AppBar position="static" color="background">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          Code Collab
        </Typography>
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