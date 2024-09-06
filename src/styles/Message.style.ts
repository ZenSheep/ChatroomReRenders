import { Stack, styled } from "@mui/material";

export const MessageStyle = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: 1,
  border: "1px solid black",
  borderRadius: 5,
  padding: 10,
  maxWidth: 300,
  width: "fit-content",
  "&.me": {
    alignSelf: "end"
  }
})