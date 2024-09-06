import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useMessages } from "../../hooks/useMessages.hook";
import { MessageStyle } from "../../styles/Message.style";

const ChatroomFullReRender = () => {
  const { messages, addMessage } = useMessages()
  const [textInput, setTextInput] = useState<string>("")

  const onClickSend = () => {
    addMessage({
      id: uuidv4(),
      content: textInput,
      author: "Marcel",
    })
  }

  return <Stack sx={{ height: "100%" }}>
    <Stack sx={{ paddingX: 3, height: "100%" }}>
      <Typography variant="h3">Chatroom</Typography>
      <Stack flex={1} gap={2}>
        {messages.map(message => <MessageStyle key={message.id} className={message.author === "Marcel" ? "me" : ""}><Typography variant="h6">{message.author}</Typography><Typography variant="body1">{message.content}</Typography></MessageStyle>)}
      </Stack>
    </Stack>
    <Stack sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}>
      <Divider />
      <Stack sx={{ background: "white", padding: 1 }}>
        <Stack direction="row" gap={2}>
          <TextField fullWidth size="small" label="Message" value={textInput} onChange={e => setTextInput(e.target.value)} />
          <Button variant="contained" onClick={onClickSend}>Send</Button>
        </Stack>
      </Stack>
    </Stack >
  </Stack >
}

export default ChatroomFullReRender