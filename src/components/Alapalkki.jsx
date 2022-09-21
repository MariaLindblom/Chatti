import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Form from './Form';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar({messagesCollection}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit">
            <Form messagesCollection={messagesCollection} />  
          </Typography>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
