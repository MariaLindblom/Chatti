import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Form from './Form';
import messagesCollection from './Channel';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Form messagesCollection={messagesCollection} />            
        </Toolbar>
      </AppBar>
    </Box>
  );
}
