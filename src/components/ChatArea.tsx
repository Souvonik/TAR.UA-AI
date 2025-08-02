import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage, Message } from "./ChatMessage";
import { useEffect, useRef } from "react";
import { LoadingBubble } from "./LoadingBubble";

interface ChatAreaProps {
  messages: Message[];
  isTyping: boolean;
}

export const ChatArea = ({ messages, isTyping }: ChatAreaProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-transparent">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold">How can I help you today?</h2>
          <p className="text-muted-foreground">
            Start a conversation by typing a message below.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 bg-transparent" ref={scrollAreaRef}>
      <div>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && <LoadingBubble />}
      </div>
    </ScrollArea>
  );
};