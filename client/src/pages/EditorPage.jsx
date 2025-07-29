import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '../components/Editor';
import { Typography, AppBar, Toolbar, Box, Button, Snackbar, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';

const EditorPage = () => {
  const { id: documentId } = useParams();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(documentId);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width:'100vw', height: 'calc(100vh - 64px)' }}>
      <AppBar position="static" color="background" elevation={0} sx={{ flexShrink: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Document ID: {documentId}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ContentCopyIcon />}
            onClick={handleCopyClick}
          >
            Copy ID
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Editor documentId={documentId} />
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Document ID copied to clipboard!"
        action={action}
      />
    </Box>
  );
};

export default EditorPage;
