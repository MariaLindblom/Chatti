import { collection, limit, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Messages from "./Messages";
import CircularProgress from '@mui/material/CircularProgress';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from "@mui/material";
import Alapalkki from './Alapalkki';

export function MenuAppBar () {
  const [auth, setAuth] = React.useState(true);
  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleChange = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    <Box sx={{ flexGrow:1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            arialabel="menu"
            sx={{ mr:2 }}
            >            
            <MenuIcon />
          </IconButton>
          {auth && (
            <div>
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu 
                id="menu-appbar"
                anchorEl={anchorE1}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorE1)}
                onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profiili</MenuItem>
                  <MenuItem onClick={handleClose}>Käyttäjä</MenuItem>
                </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function Channel() {
  const firestore = useFirestore();
  const messagesCollection = collection(firestore, "messages");
  const messagesQuery = query(
    messagesCollection,
    orderBy("createdAt"),
    limit(100)
  );

  const { status, data: messages } = useFirestoreCollectionData(messagesQuery, {
    idField: "id", // this field will be added to the object created from each document
  });

  return (
    <div>
      {status === "loading" ? (
        <CircularProgress />        
      ) : (
        <Messages messages={messages} />
      )}
      <Alapalkki messagesCollection={messagesCollection} />  
    </div>
  );
}
