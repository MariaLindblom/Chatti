import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "reactfire";
import { Button } from "@mui/material";
import { Input } from '@mui/material';

export default function Form({ messagesCollection }) {
  const [newMessage, setNewMessage] = useState("");
  const { data: user } = useUser();

  const { uid, displayName, photoURL } = user;

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      addDoc(messagesCollection, {
        text: trimmedMessage,
        createdAt: serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <Input
        disableUnderline
        inputProps={{ style: { color:"white" } }}
        value={newMessage}
        onChange={handleChange}
        placeholder="Type your message here..."
      />
      <Button color="inherit" type="submit" variant="outlined" disabled={!newMessage}>Send</Button>
    </form>
  );
}
