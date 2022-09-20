import Message from "./Message";
import { Stack } from "@mui/material";

export default function Messages({ messages }) {
  return (
    <Stack>
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </Stack>
  );
}
