import Chip from '@mui/material/Chip';

const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName }) {
  return (
      <Chip label={<>
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      {" "}
      <strong>        
        {displayName ? displayName : null}
      </strong>{" "}
      {text}</>} variant="outlined"  />
  );
}
