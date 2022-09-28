import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { updateDoc, doc } from "firebase/firestore";
import { useFirestore } from "reactfire";

export default function ViestinMuokkaus(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const firestore = useFirestore();

  const [text, setViesti] = React.useState(props.text);
  const handleChange = (event) => {
    setViesti(event.target.value);
  }
  return (
    <div>
      <Button variant="contained" color="secondary" size="small" onClick={handleClickOpen}>
        Muokkaa
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Viestin muokkaus</DialogTitle>
        <DialogContent>
            <TextField
            id="outlined-name"
            label="teksti"
            value={text}
            onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={async () => {
              const muokattuViesti = { text };
              await updateDoc(doc(firestore, "messages", props.id), muokattuViesti);
              handleClose();
            }}
          >Tallenna</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

