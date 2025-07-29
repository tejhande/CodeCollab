import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const Login = () => {
  const googleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Code Collab
      </Typography>
      <Button variant="contained" color="primary" onClick={googleLogin}>
        Login with Google
      </Button>
    </Container>
  );
};

export default Login;
