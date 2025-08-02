import { User, Bot } from "lucide-react";

export interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: string;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.type === "user";

  return (
    <div className={`flex gap-4 p-6 ${!isUser ? "bg-chat-ai-message" : ""}`}>
      <div className="flex-shrink-0">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isUser
              ? "bg-chat-user-message text-chat-user-message-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="text-sm font-medium">
          {isUser ? "You" : "TAR.UA"}
        </div>
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
      </div>
    </div>
  );
};