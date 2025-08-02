import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Plus } from "lucide-react";
import { FileUpload } from "./FileUpload";

interface UploadedFile {
  name: string;
  type: string;
  size: number;
  text: string;
}

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onFileUploaded: (file: UploadedFile) => void;
  disabled?: boolean;
}

export const ChatInput = ({
  onSendMessage,
  onFileUploaded,
  disabled,
}: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-border bg-transparent p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-end gap-2">
          <FileUpload onFileUploaded={onFileUploaded}>
            <Button
              size="icon"
              variant="ghost"
              className="mb-2"
              disabled={disabled}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </FileUpload>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message TAR.UA..."
            className="min-h-[60px] max-h-[200px] resize-none bg-chat-input/50 border-chat-input-border focus:border-ring pr-12"
            disabled={disabled}
          />
          <Button
            onClick={handleSend}
            disabled={!message.trim() || disabled}
            size="icon"
            className="mb-2 bg-chat-user-message hover:bg-chat-user-message/90 text-chat-user-message-foreground"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};