import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName }) {
  return (
      <Chip sx={{marginBottom: 1,height:"100%"}} label={<Typography sx={{whiteSpace:"normal"}}>
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      {" "}
      <strong>        
        {displayName ? displayName : null}
      </strong>{" "}
      {text}</Typography>} variant="outlined"  />
  );
}
