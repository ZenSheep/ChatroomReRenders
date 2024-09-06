import { useState } from "react";
import { prewrittenMessages } from "../constants/Message.constant";
import { Message } from "../types/Message.type";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>(prewrittenMessages)

  const addMessage = (message: Message) => {
    setMessages(messages => [...messages, message])
  }

  return { messages, addMessage }
}