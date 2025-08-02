import { useState } from "react";
import { ChatSidebar } from "@/components/ChatSidebar";
import { ChatArea } from "@/components/ChatArea";
import LightRays from "@/components/LightRays";
import { ChatInput } from "@/components/ChatInput";
import { Message } from "@/components/ChatMessage";

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  timestamp: string;
}

interface UploadedFile {
  name: string;
  type: string;
  size: number;
  text: string;
}

const Index = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(
    null
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);

  const handleNewChat = () => {
    setMessages([]);
    setActiveConversationId(null);
    setSelectedFile(null);
  };

  const handleFileUploaded = (file: UploadedFile) => {
    setSelectedFile(file);
  };

  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id);
    const conversation = conversations.find((c) => c.id === id);
    setMessages(conversation ? conversation.messages : []);
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date().toISOString(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gryphe/mythomax-l2-13b",
          messages: newMessages.map((msg) => ({
            role: msg.type === "ai" ? "assistant" : "user",
            content:
              msg.type === "user" && selectedFile
                ? `File: ${selectedFile.name}\n\n${selectedFile.text}\n\nQuestion: ${msg.content}`
                : msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch from OpenRouter API");
      }

      const data = await response.json();
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: data.choices[0].message.content,
        timestamp: new Date().toISOString(),
      };

      const updatedMessages = [...newMessages, aiMessage];
      setMessages(updatedMessages);

      if (activeConversationId) {
        setConversations(
          conversations.map((c) =>
            c.id === activeConversationId ? { ...c, messages: updatedMessages } : c
          )
        );
      } else {
        const newConversation = {
          id: Date.now().toString(),
          title: content.substring(0, 30),
          messages: updatedMessages,
          timestamp: new Date().toISOString(),
        };
        setConversations([...conversations, newConversation]);
        setActiveConversationId(newConversation.id);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "Sorry, something went wrong. Please try again.",
        timestamp: new Date().toISOString(),
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-screen flex bg-chat-background relative">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <div className="flex-1 flex z-10">
        <ChatSidebar
          conversations={conversations}
          activeConversationId={activeConversationId}
          onNewChat={handleNewChat}
          onSelectConversation={handleSelectConversation}
        />
        <div className="flex-1 flex flex-col">
          <ChatArea messages={messages} isTyping={isTyping} />
          <ChatInput
            onSendMessage={handleSendMessage}
            onFileUploaded={handleFileUploaded}
            disabled={isTyping}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;