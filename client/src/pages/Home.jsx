import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Paper, Grid } from '@mui/material';

const Home = ({ user }) => {
  const navigate = useNavigate();

  const createNewDocument = () => {
    const id = uuidV4();
    navigate(`/documents/${id}`);
  };

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        padding: '20px',
      }}
    >
      <Paper 
        elevation={3} 
        style={{ 
          padding: '40px', 
          textAlign: 'center', 
          width: '100%', 
          maxWidth: '600px' 
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome, {user.displayName}!
        </Typography>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={createNewDocument}
            >
              Create a new document
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h6">Or join an existing one</Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              placeholder="Enter document ID"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate(`/documents/${e.target.value}`);
                }
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
