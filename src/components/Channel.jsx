import { collection, limit, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Form from "./Form";
import Messages from "./Messages";
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';

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
      <Chip label="viesti" variant="outlined" />
      <Form messagesCollection={messagesCollection} />
    </div>
  );
}
