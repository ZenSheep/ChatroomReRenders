import { v4 as uuidv4 } from 'uuid';
import { Message } from "../types/Message.type";

export const prewrittenMessages: Message[] = [
  {
    id: uuidv4(),
    content: "Hello, how are you?",
    author: "Marcel"
  },
  {
    id: uuidv4(),
    content: "I'm fine, thank you!",
    author: "Aurelie"
  },
  {
    id: uuidv4(),
    content: "I'm also fine, thank you!",
    author: "Marcel"
  },
  {
    id: uuidv4(),
    content: "What's this new app you have there?",
    author: "Aurelie"
  },
  {
    id: uuidv4(),
    content: "It's a app to visualize react re-renders",
    author: "Marcel"
  },
  {
    id: uuidv4(),
    content: "Oh nice!",
    author: "Aurelie"
  },
  {
    id: uuidv4(),
    content: "What is it for?",
    author: "Aurelie"
  },
]