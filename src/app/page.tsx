import Image from "next/image";
import { ChatList } from "./components/chat/ChatList";
import { ChatInput } from "./components/chat/ChatInput";

export default function Home() {
  return (
    <div>
      <ChatList />
      <ChatInput />
    </div>
  );
}
