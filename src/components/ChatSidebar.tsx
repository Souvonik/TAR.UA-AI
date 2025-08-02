import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, MessageSquare, Home } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
interface Conversation {
  id: string;
  title: string;
  timestamp: string;
}

interface ChatSidebarProps {
  conversations: Conversation[];
  activeConversationId: string | null;
  onNewChat: () => void;
  onSelectConversation: (id: string) => void;
}

export const ChatSidebar = ({
  conversations,
  activeConversationId,
  onNewChat,
  onSelectConversation,
}: ChatSidebarProps) => {
  return (
    <div className="w-80 bg-chat-sidebar/50 border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">TAR.UA</span>
          <ThemeToggle />
        </div>
        <Button
          onClick={onNewChat}
          className="w-full justify-start gap-2 bg-transparent border border-border hover:bg-chat-hover text-foreground"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          New chat
        </Button>
      </div>

      {/* Conversations List */}
      <ScrollArea className="flex-1 p-2">
        <div className="space-y-1">
          {conversations.map((conversation) => (
            <Button
              key={conversation.id}
              onClick={() => onSelectConversation(conversation.id)}
              variant="ghost"
              className={`w-full justify-start p-3 h-auto text-left hover:bg-chat-hover ${
                activeConversationId === conversation.id
                  ? "bg-chat-hover"
                  : ""
              }`}
            >
              <div className="flex items-start gap-2 w-full">
                <MessageSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1 overflow-hidden">
                  <div className="text-sm font-medium truncate">
                    {conversation.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {conversation.timestamp}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Link to="/">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 bg-transparent border border-border hover:bg-chat-hover text-foreground"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};