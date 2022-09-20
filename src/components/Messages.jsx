import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <div>
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
}
